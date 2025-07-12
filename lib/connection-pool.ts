/**
 * Connection Pool Manager
 * TTF-Web Next.js 15 Migration - Task 1.1.4
 * 
 * Manages Supabase connections for optimal performance in serverless environments
 * MCP Integration: Performance monitoring and connection lifecycle tracking
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { Database } from '@/types/supabase'
import { validateServerEnv, isDevelopment } from './env-validation'

/**
 * Connection pool configuration
 */
interface PoolConfig {
  maxConnections: number
  idleTimeoutMs: number
  connectionTimeoutMs: number
  retryAttempts: number
  retryDelayMs: number
  healthCheckIntervalMs: number
}

/**
 * Connection wrapper with metadata
 */
interface PooledConnection {
  client: SupabaseClient<Database>
  createdAt: Date
  lastUsed: Date
  isHealthy: boolean
  usageCount: number
  id: string
}

/**
 * Connection pool statistics
 */
interface PoolStats {
  totalConnections: number
  activeConnections: number
  idleConnections: number
  unhealthyConnections: number
  totalRequests: number
  totalErrors: number
  averageResponseTime: number
  poolUtilization: number
}

/**
 * Connection Pool Manager
 * Singleton class for managing Supabase connections
 */
class ConnectionPoolManager {
  private static instance: ConnectionPoolManager
  private pool: Map<string, PooledConnection> = new Map()
  private config: PoolConfig
  private stats: PoolStats
  private healthCheckInterval: NodeJS.Timeout | null = null
  private isInitialized = false

  private constructor() {
    this.config = {
      maxConnections: isDevelopment() ? 5 : 20,
      idleTimeoutMs: 300000, // 5 minutes
      connectionTimeoutMs: 10000, // 10 seconds
      retryAttempts: 3,
      retryDelayMs: 1000,
      healthCheckIntervalMs: 60000, // 1 minute
    }

    this.stats = {
      totalConnections: 0,
      activeConnections: 0,
      idleConnections: 0,
      unhealthyConnections: 0,
      totalRequests: 0,
      totalErrors: 0,
      averageResponseTime: 0,
      poolUtilization: 0,
    }
  }

  /**
   * Get singleton instance
   */
  public static getInstance(): ConnectionPoolManager {
    if (!ConnectionPoolManager.instance) {
      ConnectionPoolManager.instance = new ConnectionPoolManager()
    }
    return ConnectionPoolManager.instance
  }

  /**
   * Initialize the connection pool
   */
  public async initialize(): Promise<void> {
    if (this.isInitialized) {
      return
    }

    try {
      // Validate environment variables
      validateServerEnv()
      
      // Create initial connections
      await this.createInitialConnections()
      
      // Start health check interval
      this.startHealthChecks()
      
      this.isInitialized = true
      console.log('✅ Connection pool initialized successfully')
    } catch (error) {
      console.error('❌ Failed to initialize connection pool:', error)
      throw error
    }
  }

  /**
   * Get a connection from the pool
   */
  public async getConnection(): Promise<SupabaseClient<Database>> {
    const startTime = Date.now()
    
    try {
      // Find an available healthy connection
      let connection = this.findAvailableConnection()
      
      if (!connection) {
        // Create new connection if pool not at max capacity
        if (this.pool.size < this.config.maxConnections) {
          connection = await this.createConnection()
        } else {
          // Wait for a connection to become available
          connection = await this.waitForConnection()
        }
      }

      // Update connection metadata
      connection.lastUsed = new Date()
      connection.usageCount++
      
      // Update statistics
      this.updateStats(startTime)
      
      return connection.client
    } catch (error) {
      this.stats.totalErrors++
      console.error('Failed to get connection from pool:', error)
      throw error
    }
  }

  /**
   * Release a connection back to the pool
   */
  public releaseConnection(client: SupabaseClient<Database>): void {
    // Find the connection in the pool
    for (const [id, connection] of this.pool.entries()) {
      if (connection.client === client) {
        connection.lastUsed = new Date()
        return
      }
    }
  }

  /**
   * Get pool statistics
   */
  public getStats(): PoolStats {
    this.updatePoolStats()
    return { ...this.stats }
  }

  /**
   * Health check for the pool
   */
  public async healthCheck(): Promise<boolean> {
    try {
      const healthyConnections = []
      const unhealthyConnections = []

      for (const [id, connection] of this.pool.entries()) {
        const isHealthy = await this.testConnection(connection.client)
        if (isHealthy) {
          connection.isHealthy = true
          healthyConnections.push(id)
        } else {
          connection.isHealthy = false
          unhealthyConnections.push(id)
        }
      }

      // Remove unhealthy connections
      for (const id of unhealthyConnections) {
        this.pool.delete(id)
      }

      // Create new connections if needed
      const minConnections = Math.min(2, this.config.maxConnections)
      if (healthyConnections.length < minConnections) {
        await this.createInitialConnections()
      }

      return healthyConnections.length > 0
    } catch (error) {
      console.error('Health check failed:', error)
      return false
    }
  }

  /**
   * Cleanup and destroy all connections
   */
  public async destroy(): Promise<void> {
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval)
      this.healthCheckInterval = null
    }

    this.pool.clear()
    this.isInitialized = false
    console.log('Connection pool destroyed')
  }

  /**
   * Create initial connections for the pool
   */
  private async createInitialConnections(): Promise<void> {
    const initialCount = Math.min(2, this.config.maxConnections)
    
    for (let i = 0; i < initialCount; i++) {
      try {
        await this.createConnection()
      } catch (error) {
        console.error(`Failed to create initial connection ${i + 1}:`, error)
      }
    }
  }

  /**
   * Create a new pooled connection
   */
  private async createConnection(): Promise<PooledConnection> {
    const env = validateServerEnv()
    const connectionId = `conn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    const client = createClient<Database>(
      env.NEXT_PUBLIC_SUPABASE_URL,
      env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        auth: {
          autoRefreshToken: true,
          persistSession: false, // Serverless mode
          flowType: 'pkce',
        },
        db: {
          schema: 'public',
        },
        global: {
          headers: {
            'x-application-name': 'ttf-web-nextjs',
            'x-connection-pool-id': connectionId,
          },
        },
        realtime: {
          params: {
            eventsPerSecond: 2, // Limit for serverless
          },
        },
      }
    )

    const connection: PooledConnection = {
      client,
      createdAt: new Date(),
      lastUsed: new Date(),
      isHealthy: true,
      usageCount: 0,
      id: connectionId,
    }

    // Test the connection
    const isHealthy = await this.testConnection(client)
    if (!isHealthy) {
      throw new Error('Failed to create healthy connection')
    }

    this.pool.set(connectionId, connection)
    this.stats.totalConnections++
    
    return connection
  }

  /**
   * Find an available healthy connection
   */
  private findAvailableConnection(): PooledConnection | null {
    const now = new Date()
    
    for (const [id, connection] of this.pool.entries()) {
      // Check if connection is healthy and not too old
      const age = now.getTime() - connection.lastUsed.getTime()
      if (connection.isHealthy && age < this.config.idleTimeoutMs) {
        return connection
      }
      
      // Remove stale connections
      if (age > this.config.idleTimeoutMs) {
        this.pool.delete(id)
      }
    }
    
    return null
  }

  /**
   * Wait for a connection to become available
   */
  private async waitForConnection(): Promise<PooledConnection> {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Connection timeout'))
      }, this.config.connectionTimeoutMs)

      const checkForConnection = () => {
        const connection = this.findAvailableConnection()
        if (connection) {
          clearTimeout(timeout)
          resolve(connection)
        } else {
          setTimeout(checkForConnection, 100)
        }
      }

      checkForConnection()
    })
  }

  /**
   * Test if a connection is healthy
   */
  private async testConnection(client: SupabaseClient<Database>): Promise<boolean> {
    try {
      const { error } = await client.from('profiles').select('count').limit(1).single()
      return !error || error.code === 'PGRST116' // No rows is okay
    } catch {
      return false
    }
  }

  /**
   * Start health check interval
   */
  private startHealthChecks(): void {
    this.healthCheckInterval = setInterval(async () => {
      await this.healthCheck()
    }, this.config.healthCheckIntervalMs)
  }

  /**
   * Update request statistics
   */
  private updateStats(startTime: number): void {
    const responseTime = Date.now() - startTime
    this.stats.totalRequests++
    
    // Calculate rolling average response time
    const currentAvg = this.stats.averageResponseTime
    const newAvg = (currentAvg * (this.stats.totalRequests - 1) + responseTime) / this.stats.totalRequests
    this.stats.averageResponseTime = Math.round(newAvg * 100) / 100
  }

  /**
   * Update pool statistics
   */
  private updatePoolStats(): void {
    const now = new Date()
    let active = 0
    let idle = 0
    let unhealthy = 0

    for (const connection of this.pool.values()) {
      const timeSinceLastUse = now.getTime() - connection.lastUsed.getTime()
      
      if (!connection.isHealthy) {
        unhealthy++
      } else if (timeSinceLastUse < 5000) { // Active if used in last 5 seconds
        active++
      } else {
        idle++
      }
    }

    this.stats.activeConnections = active
    this.stats.idleConnections = idle
    this.stats.unhealthyConnections = unhealthy
    this.stats.poolUtilization = Math.round((this.pool.size / this.config.maxConnections) * 100)
  }
}

/**
 * Exported singleton instance
 */
export const connectionPool = ConnectionPoolManager.getInstance()

/**
 * Helper function to get a managed Supabase client
 * MCP Integration: Automatic connection monitoring
 */
export async function getSupabaseClient(): Promise<SupabaseClient<Database>> {
  if (!connectionPool) {
    throw new Error('Connection pool not initialized')
  }
  
  return connectionPool.getConnection()
}

/**
 * Helper function to release a Supabase client
 */
export function releaseSupabaseClient(client: SupabaseClient<Database>): void {
  connectionPool.releaseConnection(client)
}

/**
 * Initialize connection pool
 * Should be called during application startup
 */
export async function initializeConnectionPool(): Promise<void> {
  await connectionPool.initialize()
}

/**
 * Get connection pool health status
 * MCP Integration: Health monitoring endpoint
 */
export function getConnectionPoolHealth(): PoolStats {
  return connectionPool.getStats()
}

/**
 * Cleanup connection pool
 * Should be called during application shutdown
 */
export async function cleanupConnectionPool(): Promise<void> {
  await connectionPool.destroy()
}

/**
 * Export types for external use
 */
export type { PoolConfig, PoolStats }