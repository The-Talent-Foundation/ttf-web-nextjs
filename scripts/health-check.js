#!/usr/bin/env node

/**
 * Health Check Script for TTF-Web Supabase Integration
 * 
 * This script performs comprehensive health checks on the Supabase integration:
 * - Database connectivity
 * - Authentication service
 * - Storage service  
 * - Real-time connections
 * - Edge functions
 * - Performance metrics
 * 
 * Usage: npm run health:check
 */

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ANSI color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
}

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

function logSuccess(message) {
  log(`✅ ${message}`, 'green')
}

function logError(message) {
  log(`❌ ${message}`, 'red')
}

function logWarning(message) {
  log(`⚠️  ${message}`, 'yellow')
}

function logInfo(message) {
  log(`ℹ️  ${message}`, 'blue')
}

async function loadEnvironment() {
  const envPath = path.join(process.cwd(), '.env.local')
  
  if (!fs.existsSync(envPath)) {
    logError('.env.local file not found')
    logInfo('Please create .env.local with your Supabase credentials')
    logInfo('You can copy from .env.local.example')
    return null
  }

  // Load environment variables
  dotenv.config({ path: envPath })
  
  const required = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY'
  ]
  
  const missing = required.filter(key => !process.env[key])
  
  if (missing.length > 0) {
    logError(`Missing required environment variables: ${missing.join(', ')}`)
    return null
  }
  
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY
  }
}

async function checkDatabaseConnection(supabase) {
  logInfo('Testing database connection...')
  
  try {
    const start = Date.now()
    
    // Test basic connectivity with the simplest possible query
    // Just check if we can connect to the database at all
    const { data, error } = await supabase
      .from('auth.users')
      .select('count', { count: 'exact', head: true })
      .limit(0)
    
    const duration = Date.now() - start
    
    if (error) {
      logError(`Database connection failed: ${error.message}`)
      return false
    }
    
    logSuccess(`Database connection successful (${duration}ms)`)
    return true
  } catch (error) {
    logError(`Database connection error: ${error.message}`)
    return false
  }
}

async function checkAuthService(supabase) {
  logInfo('Testing authentication service...')
  
  try {
    const start = Date.now()
    
    // Test auth service by getting current session
    const { data: { session }, error } = await supabase.auth.getSession()
    
    const duration = Date.now() - start
    
    if (error) {
      logWarning(`Auth service warning: ${error.message}`)
      return false
    }
    
    logSuccess(`Authentication service available (${duration}ms)`)
    if (session) {
      logInfo(`Current session: ${session.user?.email || 'Anonymous'}`)
    } else {
      logInfo('No active session (normal for health check)')
    }
    return true
  } catch (error) {
    logError(`Authentication service error: ${error.message}`)
    return false
  }
}

async function checkStorageService(supabase) {
  logInfo('Testing storage service...')
  
  try {
    const start = Date.now()
    
    // Test storage service by listing buckets
    const { data: buckets, error } = await supabase.storage.listBuckets()
    
    const duration = Date.now() - start
    
    if (error) {
      logWarning(`Storage service warning: ${error.message}`)
      return false
    }
    
    logSuccess(`Storage service available (${duration}ms)`)
    if (buckets && buckets.length > 0) {
      logInfo(`Found ${buckets.length} storage bucket(s): ${buckets.map(b => b.name).join(', ')}`)
    } else {
      logInfo('No storage buckets found (normal for new projects)')
    }
    return true
  } catch (error) {
    logError(`Storage service error: ${error.message}`)
    return false
  }
}

async function checkRealtimeConnection(supabase) {
  logInfo('Testing real-time connection...')
  
  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      logWarning('Real-time connection timeout (5s)')
      resolve(false)
    }, 5000)
    
    try {
      const start = Date.now()
      
      // Test real-time connection
      const channel = supabase.channel('health-check')
      
      channel
        .on('postgres_changes', { event: '*', schema: 'public' }, () => {
          // This won't be called during health check, but tests subscription setup
        })
        .subscribe((status) => {
          const duration = Date.now() - start
          
          if (status === 'SUBSCRIBED') {
            clearTimeout(timeout)
            logSuccess(`Real-time connection successful (${duration}ms)`)
            
            // Clean up
            supabase.removeChannel(channel)
            resolve(true)
          } else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
            clearTimeout(timeout)
            logError(`Real-time connection failed: ${status}`)
            resolve(false)
          }
        })
    } catch (error) {
      clearTimeout(timeout)
      logError(`Real-time connection error: ${error.message}`)
      resolve(false)
    }
  })
}

async function checkEdgeFunctions(supabase) {
  logInfo('Testing edge functions availability...')
  
  try {
    const start = Date.now()
    
    // Test edge functions by invoking a non-existent function
    // This will fail but confirms the edge function service is available
    const { error } = await supabase.functions.invoke('health-check-test', {
      body: { test: true }
    })
    
    const duration = Date.now() - start
    
    // Expected errors that confirm service is available:
    // - "not found" (function doesn't exist)
    // - "non-2xx status code" (service responds but function not deployed)
    if (error && (error.message.includes('not found') || error.message.includes('non-2xx status code'))) {
      logSuccess(`Edge functions service available (${duration}ms)`)
      logInfo('No edge functions deployed (normal for new projects)')
      return true
    } else if (error) {
      logWarning(`Edge functions warning: ${error.message}`)
      return false
    }
    
    logSuccess(`Edge functions service available (${duration}ms)`)
    return true
  } catch (error) {
    logError(`Edge functions error: ${error.message}`)
    return false
  }
}

async function performanceTest(supabase) {
  logInfo('Running performance tests...')
  
  const tests = []
  
  // Test multiple concurrent simple queries on actual tables
  const userTables = ['users', 'inquiries', 'users', 'inquiries', 'users']
  
  for (let i = 0; i < 5; i++) {
    const tableName = userTables[i]
    tests.push(
      supabase
        .from(tableName)
        .select('id')
        .limit(1)
    )
  }
  
  try {
    const start = Date.now()
    const results = await Promise.all(tests)
    const duration = Date.now() - start
    
    // Log detailed results for debugging
    results.forEach((result, index) => {
      const tableName = userTables[index]
      if (result.error) {
        logError(`Query ${index + 1} (${tableName}): ${result.error.message}`)
      } else {
        logInfo(`Query ${index + 1} (${tableName}): Success (${result.data?.length || 0} rows)`)
      }
    })
    
    const successful = results.filter(r => !r.error).length
    const avgTime = duration / tests.length
    
    if (successful === tests.length) {
      logSuccess(`Performance test: ${successful}/${tests.length} queries successful`)
      logInfo(`Average query time: ${avgTime.toFixed(2)}ms`)
      
      if (avgTime < 100) {
        logSuccess('Excellent performance (<100ms average)')
      } else if (avgTime < 500) {
        logInfo('Good performance (<500ms average)')
      } else {
        logWarning('Slow performance (>500ms average)')
      }
      return true
    } else {
      logError(`Performance test: ${successful}/${tests.length} queries successful`)
      return false
    }
  } catch (error) {
    logError(`Performance test error: ${error.message}`)
    return false
  }
}

async function main() {
  log('\n🔍 TTF-Web Supabase Health Check', 'cyan')
  log('='.repeat(50), 'cyan')
  
  // Load environment
  const env = await loadEnvironment()
  if (!env) {
    process.exit(1)
  }
  
  // Create Supabase client
  const supabase = createClient(env.url, env.anonKey)
  
  // Run health checks
  const checks = [
    { name: 'Database Connection', fn: () => checkDatabaseConnection(supabase) },
    { name: 'Authentication Service', fn: () => checkAuthService(supabase) },
    { name: 'Storage Service', fn: () => checkStorageService(supabase) },
    { name: 'Real-time Connection', fn: () => checkRealtimeConnection(supabase) },
    { name: 'Edge Functions', fn: () => checkEdgeFunctions(supabase) },
    { name: 'Performance Test', fn: () => performanceTest(supabase) }
  ]
  
  const results = []
  
  for (const check of checks) {
    log(`\n📋 ${check.name}`, 'bright')
    log('-'.repeat(30))
    
    try {
      const result = await check.fn()
      results.push({ name: check.name, success: result })
    } catch (error) {
      logError(`Unexpected error in ${check.name}: ${error.message}`)
      results.push({ name: check.name, success: false })
    }
  }
  
  // Summary
  log('\n📊 Health Check Summary', 'cyan')
  log('='.repeat(50), 'cyan')
  
  const successful = results.filter(r => r.success).length
  const total = results.length
  
  results.forEach(result => {
    if (result.success) {
      logSuccess(result.name)
    } else {
      logError(result.name)
    }
  })
  
  log(`\n🎯 Overall: ${successful}/${total} checks passed`, successful === total ? 'green' : 'yellow')
  
  if (successful === total) {
    logSuccess('All health checks passed! Supabase integration is working correctly.')
    process.exit(0)
  } else {
    logWarning(`${total - successful} health check(s) failed. Please review the issues above.`)
    process.exit(1)
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  log('\n\n🛑 Health check interrupted', 'yellow')
  process.exit(130)
})

process.on('SIGTERM', () => {
  log('\n\n🛑 Health check terminated', 'yellow')
  process.exit(143)
})

// Run the health check
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    logError(`Fatal error: ${error.message}`)
    console.error(error.stack)
    process.exit(1)
  })
}

export {
  loadEnvironment,
  checkDatabaseConnection,
  checkAuthService,
  checkStorageService,
  checkRealtimeConnection,
  checkEdgeFunctions,
  performanceTest
}