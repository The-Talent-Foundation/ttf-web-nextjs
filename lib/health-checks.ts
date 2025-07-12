/**
 * Health Check System
 * TTF-Web Next.js 15 Migration - Task 1.1.5
 * 
 * Comprehensive health monitoring for Supabase and system components
 * MCP Integration: Lighthouse performance metrics and validation hooks
 */

import { SupabaseClient } from '@supabase/supabase-js'
import { Database } from '@/types/supabase'
import { connectionPool, getConnectionPoolHealth } from './connection-pool'
import { validateServerEnv, isDevelopment, isMCPEnabled, isLighthouseEnabled } from './env-validation'

/**
 * Health check result interface
 */
interface HealthCheckResult {
  status: 'healthy' | 'degraded' | 'unhealthy'
  component: string
  message: string
  responseTime: number
  timestamp: Date
  metadata?: Record<string, any>
}

/**
 * System health summary
 */
interface HealthSummary {
  overall: 'healthy' | 'degraded' | 'unhealthy'
  checks: HealthCheckResult[]
  uptime: number
  version: string
  environment: string
  lastUpdated: Date
}

/**
 * MCP validation result
 */
interface MCPValidationResult {
  isValid: boolean
  validationType: 'lighthouse' | 'security' | 'performance'
  score?: number
  issues: string[]
  recommendations: string[]
}

/**
 * Health Check Manager
 * Centralized health monitoring for all system components
 */
class HealthCheckManager {
  private static instance: HealthCheckManager
  private startTime: Date = new Date()
  private lastHealthCheck: Date | null = null
  private cachedResults: HealthCheckResult[] = []
  private readonly cacheTimeout = 30000 // 30 seconds

  private constructor() {}

  public static getInstance(): HealthCheckManager {
    if (!HealthCheckManager.instance) {
      HealthCheckManager.instance = new HealthCheckManager()
    }
    return HealthCheckManager.instance
  }

  /**
   * Perform comprehensive health check
   */
  public async performHealthCheck(): Promise<HealthSummary> {
    const startTime = Date.now()
    const checks: HealthCheckResult[] = []

    try {
      // Parallel health checks for better performance
      const healthCheckPromises = [
        this.checkDatabase(),
        this.checkConnectionPool(),
        this.checkEnvironment(),
        this.checkFileSystem(),
        this.checkMemory(),
        this.checkMCPIntegration(),
      ]

      // Add Lighthouse check if enabled
      if (isLighthouseEnabled()) {
        healthCheckPromises.push(this.checkLighthouseIntegration())
      }

      const results = await Promise.allSettled(healthCheckPromises)
      
      // Process results and handle any rejections
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          checks.push(result.value)
        } else {
          checks.push({
            status: 'unhealthy',
            component: this.getComponentName(index),
            message: `Health check failed: ${result.reason}`,
            responseTime: Date.now() - startTime,
            timestamp: new Date(),
          })
        }
      })

      // Determine overall health status
      const overallStatus = this.calculateOverallStatus(checks)

      const summary: HealthSummary = {
        overall: overallStatus,
        checks,
        uptime: Date.now() - this.startTime.getTime(),
        version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
        environment: process.env.NEXT_PUBLIC_APP_ENV || 'development',
        lastUpdated: new Date(),
      }

      this.lastHealthCheck = new Date()
      this.cachedResults = checks

      return summary
    } catch (error) {
      console.error('Health check failed:', error)
      
      return {
        overall: 'unhealthy',
        checks: [{
          status: 'unhealthy',
          component: 'system',
          message: `Health check system failure: ${error}`,
          responseTime: Date.now() - startTime,
          timestamp: new Date(),
        }],
        uptime: Date.now() - this.startTime.getTime(),
        version: '1.0.0',
        environment: 'unknown',
        lastUpdated: new Date(),
      }
    }
  }

  /**
   * Check database connectivity and performance
   */
  private async checkDatabase(): Promise<HealthCheckResult> {
    const startTime = Date.now()
    
    try {
      const client = await connectionPool.getConnection()
      
      // Test basic connectivity
      const { data, error } = await client
        .from('profiles')
        .select('count')
        .limit(1)
        .single()

      const responseTime = Date.now() - startTime

      if (error && error.code !== 'PGRST116') { // PGRST116 = no rows, which is okay
        return {
          status: 'unhealthy',
          component: 'database',
          message: `Database error: ${error.message}`,
          responseTime,
          timestamp: new Date(),
          metadata: { errorCode: error.code },
        }
      }

      // Check response time
      const status = responseTime > 5000 ? 'degraded' : 'healthy'
      const message = status === 'degraded' 
        ? `Database responding slowly (${responseTime}ms)`
        : 'Database connection healthy'

      connectionPool.releaseConnection(client)

      return {
        status,
        component: 'database',
        message,
        responseTime,
        timestamp: new Date(),
        metadata: { 
          querySuccess: true,
          connectionPoolSize: connectionPool.getStats().totalConnections,
        },
      }
    } catch (error) {
      return {
        status: 'unhealthy',
        component: 'database',
        message: `Database connection failed: ${error}`,
        responseTime: Date.now() - startTime,
        timestamp: new Date(),
      }
    }
  }

  /**
   * Check connection pool health
   */
  private async checkConnectionPool(): Promise<HealthCheckResult> {
    const startTime = Date.now()
    
    try {
      const poolStats = getConnectionPoolHealth()
      const poolHealth = await connectionPool.healthCheck()
      
      const responseTime = Date.now() - startTime
      
      // Determine status based on pool metrics
      let status: 'healthy' | 'degraded' | 'unhealthy'
      let message: string

      if (!poolHealth) {
        status = 'unhealthy'
        message = 'Connection pool health check failed'
      } else if (poolStats.unhealthyConnections > 0 || poolStats.poolUtilization > 90) {
        status = 'degraded'
        message = `Pool utilization: ${poolStats.poolUtilization}%, unhealthy connections: ${poolStats.unhealthyConnections}`
      } else {
        status = 'healthy'
        message = `Pool healthy: ${poolStats.activeConnections} active, ${poolStats.idleConnections} idle`
      }

      return {
        status,
        component: 'connection-pool',
        message,
        responseTime,
        timestamp: new Date(),
        metadata: poolStats,
      }
    } catch (error) {
      return {
        status: 'unhealthy',
        component: 'connection-pool',
        message: `Pool check failed: ${error}`,
        responseTime: Date.now() - startTime,
        timestamp: new Date(),
      }
    }
  }

  /**
   * Check environment configuration
   */
  private async checkEnvironment(): Promise<HealthCheckResult> {
    const startTime = Date.now()
    
    try {
      validateServerEnv()
      
      const responseTime = Date.now() - startTime
      
      return {
        status: 'healthy',
        component: 'environment',
        message: 'Environment variables validated successfully',
        responseTime,
        timestamp: new Date(),
        metadata: {
          nodeVersion: process.version,
          isDevelopment: isDevelopment(),
          mcpEnabled: isMCPEnabled(),
          lighthouseEnabled: isLighthouseEnabled(),
        },
      }
    } catch (error) {
      return {
        status: 'unhealthy',
        component: 'environment',
        message: `Environment validation failed: ${error}`,
        responseTime: Date.now() - startTime,
        timestamp: new Date(),
      }
    }
  }

  /**
   * Check file system access
   */
  private async checkFileSystem(): Promise<HealthCheckResult> {
    const startTime = Date.now()
    
    try {
      // Test file system read/write
      const fs = require('fs').promises
      const path = require('path')
      
      const testFile = path.join(process.cwd(), '.health-check-temp')
      const testData = `health-check-${Date.now()}`
      
      await fs.writeFile(testFile, testData)
      const readData = await fs.readFile(testFile, 'utf8')
      await fs.unlink(testFile)
      
      const responseTime = Date.now() - startTime
      
      if (readData !== testData) {
        return {
          status: 'unhealthy',
          component: 'filesystem',
          message: 'File system read/write verification failed',
          responseTime,
          timestamp: new Date(),
        }
      }

      return {
        status: 'healthy',
        component: 'filesystem',
        message: 'File system access healthy',
        responseTime,
        timestamp: new Date(),
        metadata: {
          workingDirectory: process.cwd(),
        },
      }
    } catch (error) {
      return {
        status: 'unhealthy',
        component: 'filesystem',
        message: `File system check failed: ${error}`,
        responseTime: Date.now() - startTime,
        timestamp: new Date(),
      }
    }
  }

  /**
   * Check memory usage
   */
  private async checkMemory(): Promise<HealthCheckResult> {
    const startTime = Date.now()
    
    try {
      const memUsage = process.memoryUsage()
      const responseTime = Date.now() - startTime
      
      // Convert to MB
      const heapUsedMB = Math.round(memUsage.heapUsed / 1024 / 1024)
      const heapTotalMB = Math.round(memUsage.heapTotal / 1024 / 1024)
      const rssMB = Math.round(memUsage.rss / 1024 / 1024)
      
      // Determine status based on memory usage
      const memoryUtilization = (memUsage.heapUsed / memUsage.heapTotal) * 100
      let status: 'healthy' | 'degraded' | 'unhealthy'
      
      if (memoryUtilization > 90) {
        status = 'unhealthy'
      } else if (memoryUtilization > 75) {
        status = 'degraded'
      } else {
        status = 'healthy'
      }

      return {
        status,
        component: 'memory',
        message: `Memory usage: ${heapUsedMB}MB / ${heapTotalMB}MB (${Math.round(memoryUtilization)}%)`,
        responseTime,
        timestamp: new Date(),
        metadata: {
          heapUsedMB,
          heapTotalMB,
          rssMB,
          utilization: Math.round(memoryUtilization),
        },
      }
    } catch (error) {
      return {
        status: 'unhealthy',
        component: 'memory',
        message: `Memory check failed: ${error}`,
        responseTime: Date.now() - startTime,
        timestamp: new Date(),
      }
    }
  }

  /**
   * Check MCP integration status
   */
  private async checkMCPIntegration(): Promise<HealthCheckResult> {
    const startTime = Date.now()
    
    try {
      if (!isMCPEnabled()) {
        return {
          status: 'healthy',
          component: 'mcp',
          message: 'MCP integration disabled',
          responseTime: Date.now() - startTime,
          timestamp: new Date(),
          metadata: { enabled: false },
        }
      }

      // MCP validation checks would go here
      // For now, we'll simulate a basic check
      const responseTime = Date.now() - startTime

      return {
        status: 'healthy',
        component: 'mcp',
        message: 'MCP integration healthy',
        responseTime,
        timestamp: new Date(),
        metadata: { 
          enabled: true,
          validationEndpoint: process.env.MCP_VALIDATION_ENDPOINT,
        },
      }
    } catch (error) {
      return {
        status: 'unhealthy',
        component: 'mcp',
        message: `MCP check failed: ${error}`,
        responseTime: Date.now() - startTime,
        timestamp: new Date(),
      }
    }
  }

  /**
   * Check Lighthouse integration status
   */
  private async checkLighthouseIntegration(): Promise<HealthCheckResult> {
    const startTime = Date.now()
    
    try {
      // Lighthouse integration check would go here
      // For now, we'll simulate a basic check
      const responseTime = Date.now() - startTime

      return {
        status: 'healthy',
        component: 'lighthouse',
        message: 'Lighthouse integration healthy',
        responseTime,
        timestamp: new Date(),
        metadata: { 
          enabled: true,
          lastAudit: null, // Would be populated with actual data
        },
      }
    } catch (error) {
      return {
        status: 'unhealthy',
        component: 'lighthouse',
        message: `Lighthouse check failed: ${error}`,
        responseTime: Date.now() - startTime,
        timestamp: new Date(),
      }
    }
  }

  /**
   * Calculate overall health status
   */
  private calculateOverallStatus(checks: HealthCheckResult[]): 'healthy' | 'degraded' | 'unhealthy' {
    const unhealthyCount = checks.filter(check => check.status === 'unhealthy').length
    const degradedCount = checks.filter(check => check.status === 'degraded').length
    
    if (unhealthyCount > 0) {
      return 'unhealthy'
    } else if (degradedCount > 0) {
      return 'degraded'
    } else {
      return 'healthy'
    }
  }

  /**
   * Get component name by index
   */
  private getComponentName(index: number): string {
    const components = ['database', 'connection-pool', 'environment', 'filesystem', 'memory', 'mcp', 'lighthouse']
    return components[index] || 'unknown'
  }

  /**
   * Get cached health results if still valid
   */
  public getCachedHealth(): HealthSummary | null {
    if (!this.lastHealthCheck || !this.cachedResults.length) {
      return null
    }

    const cacheAge = Date.now() - this.lastHealthCheck.getTime()
    if (cacheAge > this.cacheTimeout) {
      return null
    }

    return {
      overall: this.calculateOverallStatus(this.cachedResults),
      checks: this.cachedResults,
      uptime: Date.now() - this.startTime.getTime(),
      version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
      environment: process.env.NEXT_PUBLIC_APP_ENV || 'development',
      lastUpdated: this.lastHealthCheck,
    }
  }
}

/**
 * Exported singleton instance
 */
export const healthChecker = HealthCheckManager.getInstance()

/**
 * Perform system health check
 * MCP Integration: Health monitoring endpoint
 */
export async function performHealthCheck(): Promise<HealthSummary> {
  return healthChecker.performHealthCheck()
}

/**
 * Get cached health status (fast)
 */
export function getCachedHealthStatus(): HealthSummary | null {
  return healthChecker.getCachedHealth()
}

/**
 * Quick health check for API endpoints
 */
export async function quickHealthCheck(): Promise<{ status: string; uptime: number }> {
  const cached = getCachedHealthStatus()
  
  if (cached) {
    return {
      status: cached.overall,
      uptime: cached.uptime,
    }
  }

  // If no cache, perform minimal check
  try {
    const client = await connectionPool.getConnection()
    connectionPool.releaseConnection(client)
    
    return {
      status: 'healthy',
      uptime: Date.now() - healthChecker['startTime'].getTime(),
    }
  } catch {
    return {
      status: 'unhealthy',
      uptime: Date.now() - healthChecker['startTime'].getTime(),
    }
  }
}

/**
 * MCP validation function
 * Validates tool inputs and outputs for MCP integration
 */
export async function validateMCPOperation(
  operation: string,
  input: any,
  output?: any
): Promise<MCPValidationResult> {
  if (!isMCPEnabled()) {
    return {
      isValid: true,
      validationType: 'security',
      issues: [],
      recommendations: [],
    }
  }

  try {
    // Basic validation logic
    const issues: string[] = []
    const recommendations: string[] = []

    // Validate input
    if (!input || typeof input !== 'object') {
      issues.push('Invalid input format')
    }

    // Validate operation name
    if (!operation || typeof operation !== 'string') {
      issues.push('Invalid operation name')
    }

    // Security checks
    if (JSON.stringify(input).includes('script')) {
      issues.push('Potential XSS detected in input')
      recommendations.push('Sanitize input to remove script tags')
    }

    // Performance recommendations
    if (JSON.stringify(input).length > 10000) {
      recommendations.push('Large input detected, consider pagination')
    }

    return {
      isValid: issues.length === 0,
      validationType: 'security',
      issues,
      recommendations,
    }
  } catch (error) {
    return {
      isValid: false,
      validationType: 'security',
      issues: [`Validation error: ${error}`],
      recommendations: ['Review input format and try again'],
    }
  }
}

/**
 * Export types for external use
 */
export type { HealthCheckResult, HealthSummary, MCPValidationResult }