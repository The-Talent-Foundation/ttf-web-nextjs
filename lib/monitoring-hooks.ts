/**
 * MCP Monitoring Hooks
 * TTF-Web Next.js 15 Migration - Task 1.1.6
 * 
 * MCP (Model Context Protocol) integration decorators and monitoring hooks
 * Provides validation, performance tracking, and tool lifecycle management
 */

import { validateMCPOperation, performHealthCheck } from './health-checks'
import { isMCPEnabled, isLighthouseEnabled, isDevelopment } from './env-validation'
import { connectionPool } from './connection-pool'

/**
 * MCP operation metadata
 */
interface MCPOperationData {
  id: string
  name: string
  startTime: number
  endTime?: number
  duration?: number
  status: 'pending' | 'success' | 'error'
  input: any
  output?: any
  error?: string
  validationResult?: any
}

/**
 * Performance metrics
 */
interface PerformanceMetrics {
  operationCount: number
  averageResponseTime: number
  errorRate: number
  successRate: number
  totalErrors: number
  totalSuccess: number
  lastUpdated: Date
}

/**
 * MCP Hook Manager
 * Centralized management of MCP operations and monitoring
 */
class MCPHookManager {
  private static instance: MCPHookManager
  private operations: Map<string, MCPOperationData> = new Map()
  private metrics: PerformanceMetrics = {
    operationCount: 0,
    averageResponseTime: 0,
    errorRate: 0,
    successRate: 0,
    totalErrors: 0,
    totalSuccess: 0,
    lastUpdated: new Date(),
  }

  private constructor() {}

  public static getInstance(): MCPHookManager {
    if (!MCPHookManager.instance) {
      MCPHookManager.instance = new MCPHookManager()
    }
    return MCPHookManager.instance
  }

  /**
   * Start tracking an MCP operation
   */
  public startOperation(name: string, input: any): string {
    const operationId = `mcp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    const operation: MCPOperationData = {
      id: operationId,
      name,
      startTime: Date.now(),
      status: 'pending',
      input,
    }

    this.operations.set(operationId, operation)
    
    if (isDevelopment()) {
      console.log(`🔍 MCP Operation Started: ${name} (${operationId})`)
    }

    return operationId
  }

  /**
   * Complete an MCP operation with success
   */
  public async completeOperation(operationId: string, output: any): Promise<void> {
    const operation = this.operations.get(operationId)
    if (!operation) {
      console.warn(`MCP operation ${operationId} not found`)
      return
    }

    operation.endTime = Date.now()
    operation.duration = operation.endTime - operation.startTime
    operation.status = 'success'
    operation.output = output

    // Validate operation if MCP is enabled
    if (isMCPEnabled()) {
      operation.validationResult = await validateMCPOperation(
        operation.name,
        operation.input,
        output
      )
    }

    this.updateMetrics(operation)
    
    if (isDevelopment()) {
      console.log(`✅ MCP Operation Completed: ${operation.name} (${operation.duration}ms)`)
    }

    // Cleanup after some time to prevent memory leaks
    setTimeout(() => {
      this.operations.delete(operationId)
    }, 300000) // 5 minutes
  }

  /**
   * Mark an MCP operation as failed
   */
  public failOperation(operationId: string, error: string): void {
    const operation = this.operations.get(operationId)
    if (!operation) {
      console.warn(`MCP operation ${operationId} not found`)
      return
    }

    operation.endTime = Date.now()
    operation.duration = operation.endTime - operation.startTime
    operation.status = 'error'
    operation.error = error

    this.updateMetrics(operation)
    
    if (isDevelopment()) {
      console.error(`❌ MCP Operation Failed: ${operation.name} (${operation.duration}ms) - ${error}`)
    }

    // Cleanup after some time
    setTimeout(() => {
      this.operations.delete(operationId)
    }, 300000) // 5 minutes
  }

  /**
   * Get current performance metrics
   */
  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }

  /**
   * Get active operations
   */
  public getActiveOperations(): MCPOperationData[] {
    return Array.from(this.operations.values()).filter(op => op.status === 'pending')
  }

  /**
   * Update performance metrics
   */
  private updateMetrics(operation: MCPOperationData): void {
    this.metrics.operationCount++
    
    if (operation.status === 'success') {
      this.metrics.totalSuccess++
    } else if (operation.status === 'error') {
      this.metrics.totalErrors++
    }

    // Calculate rates
    this.metrics.successRate = this.metrics.totalSuccess / this.metrics.operationCount
    this.metrics.errorRate = this.metrics.totalErrors / this.metrics.operationCount

    // Update average response time
    if (operation.duration) {
      const currentAvg = this.metrics.averageResponseTime
      const newAvg = (currentAvg * (this.metrics.operationCount - 1) + operation.duration) / this.metrics.operationCount
      this.metrics.averageResponseTime = Math.round(newAvg * 100) / 100
    }

    this.metrics.lastUpdated = new Date()
  }
}

/**
 * Exported singleton instance
 */
export const mcpHookManager = MCPHookManager.getInstance()

/**
 * MCP Operation Decorator
 * Automatically tracks MCP operations for functions
 */
export function MCPOperation(operationName: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    descriptor.value = async function (...args: any[]) {
      if (!isMCPEnabled()) {
        return originalMethod.apply(this, args)
      }

      const operationId = mcpHookManager.startOperation(operationName, args)

      try {
        const result = await originalMethod.apply(this, args)
        await mcpHookManager.completeOperation(operationId, result)
        return result
      } catch (error) {
        mcpHookManager.failOperation(operationId, error instanceof Error ? error.message : String(error))
        throw error
      }
    }

    return descriptor
  }
}

/**
 * Database Operation Decorator
 * Specifically for database operations with connection pool monitoring
 */
export function DatabaseOperation(operationName: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    descriptor.value = async function (...args: any[]) {
      const operationId = mcpHookManager.startOperation(`db.${operationName}`, args)
      let client = null

      try {
        // Get database client
        client = await connectionPool.getConnection()
        
        // Execute the original method with the client
        const result = await originalMethod.apply(this, [client, ...args])
        
        await mcpHookManager.completeOperation(operationId, result)
        return result
      } catch (error) {
        mcpHookManager.failOperation(operationId, error instanceof Error ? error.message : String(error))
        throw error
      } finally {
        // Always release the connection
        if (client) {
          connectionPool.releaseConnection(client)
        }
      }
    }

    return descriptor
  }
}

/**
 * Performance Monitor Decorator
 * Tracks performance metrics and logs slow operations
 */
export function PerformanceMonitor(slowThresholdMs: number = 1000) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    descriptor.value = async function (...args: any[]) {
      const startTime = Date.now()
      
      try {
        const result = await originalMethod.apply(this, args)
        const duration = Date.now() - startTime
        
        if (duration > slowThresholdMs) {
          console.warn(`⚠️ Slow operation detected: ${target.constructor.name}.${propertyKey} (${duration}ms)`)
        }
        
        return result
      } catch (error) {
        const duration = Date.now() - startTime
        console.error(`❌ Operation failed: ${target.constructor.name}.${propertyKey} (${duration}ms)`, error)
        throw error
      }
    }

    return descriptor
  }
}

/**
 * Helper functions for manual MCP operation tracking
 */
export function startMCPOperation(name: string, input: any): string {
  return mcpHookManager.startOperation(name, input)
}

export async function completeMCPOperation(operationId: string, output: any): Promise<void> {
  await mcpHookManager.completeOperation(operationId, output)
}

export function failMCPOperation(operationId: string, error: string): void {
  mcpHookManager.failOperation(operationId, error)
}

/**
 * Get MCP performance metrics
 */
export function getMCPMetrics(): PerformanceMetrics {
  return mcpHookManager.getMetrics()
}

/**
 * Get active MCP operations
 */
export function getActiveMCPOperations(): MCPOperationData[] {
  return mcpHookManager.getActiveOperations()
}

/**
 * MCP Health Check Integration
 * Provides health status for MCP operations
 */
export async function getMCPHealthStatus() {
  const metrics = getMCPMetrics()
  const activeOps = getActiveMCPOperations()
  const healthStatus = await performHealthCheck()

  return {
    mcp: {
      enabled: isMCPEnabled(),
      lighthouseEnabled: isLighthouseEnabled(),
      metrics,
      activeOperations: activeOps.length,
      healthStatus: healthStatus.overall,
    },
    system: {
      overall: healthStatus.overall,
      uptime: healthStatus.uptime,
      environment: healthStatus.environment,
      version: healthStatus.version,
    },
  }
}

/**
 * Export types for external use
 */
export type { MCPOperationData, PerformanceMetrics }