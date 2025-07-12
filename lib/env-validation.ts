/**
 * Environment Variable Validation
 * TTF-Web Next.js 15 Migration - Task 1.1.3
 * 
 * Validates environment variables for Supabase integration
 * MCP Integration: Validation hooks for security and performance
 */

import { z } from 'zod'

/**
 * Client-side environment schema
 * Only includes public environment variables
 */
const clientEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z
    .string()
    .url('Invalid Supabase URL format')
    .refine(
      (url) => url.includes('supabase.co') || url.includes('localhost'),
      'URL must be a valid Supabase URL'
    ),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z
    .string()
    .min(1, 'Supabase anon key is required')
    .refine(
      (key) => key.startsWith('eyJ'),
      'Anon key must be a valid JWT token'
    ),
  NEXT_PUBLIC_APP_ENV: z
    .enum(['development', 'staging', 'production'])
    .default('development'),
  NEXT_PUBLIC_APP_VERSION: z
    .string()
    .default('1.0.0'),
})

/**
 * Server-side environment schema
 * Includes all environment variables including secrets
 */
const serverEnvSchema = clientEnvSchema.extend({
  SUPABASE_SERVICE_ROLE_KEY: z
    .string()
    .min(1, 'Service role key is required for server operations')
    .refine(
      (key) => key.startsWith('eyJ'),
      'Service key must be a valid JWT token'
    )
    .optional(), // Optional for development
  
  SUPABASE_JWT_SECRET: z
    .string()
    .min(32, 'JWT secret must be at least 32 characters')
    .optional(),
  
  DATABASE_URL: z
    .string()
    .url('Invalid database URL')
    .optional(),
  
  // MCP Integration settings
  MCP_ENABLED: z
    .string()
    .transform((val) => val === 'true')
    .default('false'),
  
  MCP_VALIDATION_ENDPOINT: z
    .string()
    .url('Invalid MCP validation endpoint')
    .optional(),
  
  MCP_LIGHTHOUSE_INTEGRATION: z
    .string()
    .transform((val) => val === 'true')
    .default('false'),
  
  // Performance monitoring
  ENABLE_PERFORMANCE_MONITORING: z
    .string()
    .transform((val) => val === 'true')
    .default('true'),
  
  // Security settings
  ENABLE_AUDIT_LOGGING: z
    .string()
    .transform((val) => val === 'true')
    .default('true'),
  
  CORS_ORIGIN: z
    .string()
    .default('*'),
  
  // Rate limiting
  RATE_LIMIT_MAX: z
    .string()
    .transform((val) => parseInt(val, 10))
    .default('100'),
  
  RATE_LIMIT_WINDOW_MS: z
    .string()
    .transform((val) => parseInt(val, 10))
    .default('900000'), // 15 minutes
})

/**
 * Validate client-side environment variables
 * Safe to use in browser environments
 */
export function validateClientEnv() {
  try {
    const env = {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
      NEXT_PUBLIC_APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION,
    }
    
    return clientEnvSchema.parse(env)
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map(
        (err) => `${err.path.join('.')}: ${err.message}`
      )
      throw new Error(
        `Client environment validation failed:\n${errorMessages.join('\n')}`
      )
    }
    throw error
  }
}

/**
 * Validate server-side environment variables
 * Should only be used in server environments
 */
export function validateServerEnv() {
  if (typeof window !== 'undefined') {
    throw new Error('validateServerEnv should only be called on the server')
  }
  
  try {
    const env = {
      // Client env
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
      NEXT_PUBLIC_APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION,
      
      // Server-only env
      SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
      SUPABASE_JWT_SECRET: process.env.SUPABASE_JWT_SECRET,
      DATABASE_URL: process.env.DATABASE_URL,
      
      // MCP settings
      MCP_ENABLED: process.env.MCP_ENABLED,
      MCP_VALIDATION_ENDPOINT: process.env.MCP_VALIDATION_ENDPOINT,
      MCP_LIGHTHOUSE_INTEGRATION: process.env.MCP_LIGHTHOUSE_INTEGRATION,
      
      // Performance and security
      ENABLE_PERFORMANCE_MONITORING: process.env.ENABLE_PERFORMANCE_MONITORING,
      ENABLE_AUDIT_LOGGING: process.env.ENABLE_AUDIT_LOGGING,
      CORS_ORIGIN: process.env.CORS_ORIGIN,
      
      // Rate limiting
      RATE_LIMIT_MAX: process.env.RATE_LIMIT_MAX,
      RATE_LIMIT_WINDOW_MS: process.env.RATE_LIMIT_WINDOW_MS,
    }
    
    return serverEnvSchema.parse(env)
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map(
        (err) => `${err.path.join('.')}: ${err.message}`
      )
      throw new Error(
        `Server environment validation failed:\n${errorMessages.join('\n')}`
      )
    }
    throw error
  }
}

/**
 * Get environment variables with validation
 * Automatically chooses client or server validation based on environment
 */
export function getValidatedEnv() {
  if (typeof window !== 'undefined') {
    return validateClientEnv()
  }
  return validateServerEnv()
}

/**
 * Environment variable types
 * MCP Integration: Type-safe environment access
 */
export type ClientEnv = z.infer<typeof clientEnvSchema>
export type ServerEnv = z.infer<typeof serverEnvSchema>
export type ValidatedEnv = ClientEnv | ServerEnv

/**
 * Check if running in development mode
 */
export function isDevelopment(): boolean {
  return process.env.NEXT_PUBLIC_APP_ENV === 'development' || 
         process.env.NODE_ENV === 'development'
}

/**
 * Check if running in production mode
 */
export function isProduction(): boolean {
  return process.env.NEXT_PUBLIC_APP_ENV === 'production' || 
         process.env.NODE_ENV === 'production'
}

/**
 * Check if MCP integration is enabled
 */
export function isMCPEnabled(): boolean {
  return process.env.MCP_ENABLED === 'true'
}

/**
 * Check if Lighthouse integration is enabled
 */
export function isLighthouseEnabled(): boolean {
  return process.env.MCP_LIGHTHOUSE_INTEGRATION === 'true'
}

/**
 * Get rate limiting configuration
 */
export function getRateLimitConfig() {
  const env = typeof window !== 'undefined' ? validateClientEnv() : validateServerEnv()
  
  if ('RATE_LIMIT_MAX' in env && 'RATE_LIMIT_WINDOW_MS' in env) {
    return {
      max: env.RATE_LIMIT_MAX,
      windowMs: env.RATE_LIMIT_WINDOW_MS,
    }
  }
  
  // Default values for client-side
  return {
    max: 100,
    windowMs: 900000, // 15 minutes
  }
}

/**
 * Validate environment on module load (server-side only)
 * This ensures environment variables are validated early in the application lifecycle
 */
if (typeof window === 'undefined') {
  try {
    validateServerEnv()
    console.log('✅ Server environment validation passed')
  } catch (error) {
    console.error('❌ Server environment validation failed:', error)
    // In development, log the error but don't crash
    if (!isDevelopment()) {
      process.exit(1)
    }
  }
}