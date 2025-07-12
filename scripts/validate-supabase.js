#!/usr/bin/env node

/**
 * Supabase Environment Validation Script
 * Validates all required environment variables and Supabase configuration
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module workaround for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ANSI color codes for better output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logHeader(message) {
  console.log('\n' + '='.repeat(60));
  log(message, 'bold');
  console.log('='.repeat(60));
}

function logSuccess(message) {
  log(`✅ ${message}`, 'green');
}

function logError(message) {
  log(`❌ ${message}`, 'red');
}

function logWarning(message) {
  log(`⚠️  ${message}`, 'yellow');
}

function logInfo(message) {
  log(`ℹ️  ${message}`, 'blue');
}

async function validateEnvironment() {
  logHeader('SUPABASE ENVIRONMENT VALIDATION');
  
  let hasErrors = false;
  let hasWarnings = false;

  // Check for .env.local file
  const envPath = path.join(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) {
    logError('.env.local file not found');
    logInfo('Please create .env.local with your Supabase configuration');
    logInfo('Required variables:');
    console.log('  NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co');
    console.log('  NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key');
    console.log('  SUPABASE_SERVICE_ROLE_KEY=your-service-role-key');
    console.log('  DATABASE_URL=postgresql://postgres:password@host:port/database');
    hasErrors = true;
  } else {
    logSuccess('.env.local file found');
  }

  // Load environment variables
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const envVars = {};
    
    envContent.split('\n').forEach(line => {
      if (line.trim() && !line.startsWith('#')) {
        const [key, ...valueParts] = line.split('=');
        if (key && valueParts.length > 0) {
          envVars[key.trim()] = valueParts.join('=').trim();
        }
      }
    });

    // Required environment variables
    const requiredVars = [
      'NEXT_PUBLIC_SUPABASE_URL',
      'NEXT_PUBLIC_SUPABASE_ANON_KEY',
      'SUPABASE_SERVICE_ROLE_KEY'
    ];

    const optionalVars = [
      'DATABASE_URL'
    ];

    console.log('\n📋 Required Environment Variables:');
    requiredVars.forEach(varName => {
      if (envVars[varName]) {
        logSuccess(`${varName} is set`);
      } else {
        logError(`${varName} is missing`);
        hasErrors = true;
      }
    });

    console.log('\n📋 Optional Environment Variables:');
    optionalVars.forEach(varName => {
      if (envVars[varName]) {
        logSuccess(`${varName} is set`);
      } else {
        logWarning(`${varName} is not set (optional)`);
        hasWarnings = true;
      }
    });

    // Validate URL format
    if (envVars.NEXT_PUBLIC_SUPABASE_URL) {
      try {
        const url = new URL(envVars.NEXT_PUBLIC_SUPABASE_URL);
        if (url.hostname.includes('supabase.co')) {
          logSuccess('Supabase URL format is valid');
        } else {
          logWarning('Supabase URL doesn\'t appear to be a standard Supabase URL');
          hasWarnings = true;
        }
      } catch (error) {
        logError('Supabase URL format is invalid');
        hasErrors = true;
      }
    }

    // Validate key lengths (approximate)
    if (envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      if (envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY.length > 100) {
        logSuccess('Anon key appears to be valid length');
      } else {
        logWarning('Anon key appears to be too short');
        hasWarnings = true;
      }
    }

    if (envVars.SUPABASE_SERVICE_ROLE_KEY) {
      if (envVars.SUPABASE_SERVICE_ROLE_KEY.length > 100) {
        logSuccess('Service role key appears to be valid length');
      } else {
        logWarning('Service role key appears to be too short');
        hasWarnings = true;
      }
    }
  }

  // Check TypeScript files
  console.log('\n📋 TypeScript Configuration:');
  
  const requiredFiles = [
    'lib/supabase.ts',
    'lib/env-validation.ts',
    'lib/connection-pool.ts',
    'lib/health-checks.ts',
    'types/supabase.ts'
  ];

  requiredFiles.forEach(filePath => {
    if (fs.existsSync(path.join(process.cwd(), filePath))) {
      logSuccess(`${filePath} exists`);
    } else {
      logError(`${filePath} is missing`);
      hasErrors = true;
    }
  });

  // Check dependencies
  console.log('\n📋 Package Dependencies:');
  
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const requiredDeps = [
      '@supabase/supabase-js',
      'zod'
    ];

    const requiredDevDeps = [
      '@types/node'
    ];

    requiredDeps.forEach(dep => {
      if (packageJson.dependencies && packageJson.dependencies[dep]) {
        logSuccess(`${dep} is installed`);
      } else {
        logError(`${dep} is missing from dependencies`);
        hasErrors = true;
      }
    });

    requiredDevDeps.forEach(dep => {
      if (packageJson.devDependencies && packageJson.devDependencies[dep]) {
        logSuccess(`${dep} is installed (devDependencies)`);
      } else {
        logError(`${dep} is missing from devDependencies`);
        hasErrors = true;
      }
    });

  } catch (error) {
    logError('Could not read package.json');
    hasErrors = true;
  }

  // Summary
  logHeader('VALIDATION SUMMARY');
  
  if (hasErrors) {
    logError('Validation failed with errors');
    logInfo('Please fix the errors above before proceeding');
    process.exit(1);
  } else if (hasWarnings) {
    logWarning('Validation completed with warnings');
    logInfo('Consider addressing the warnings above');
    process.exit(0);
  } else {
    logSuccess('All validations passed!');
    logInfo('Your Supabase environment is properly configured');
    process.exit(0);
  }
}

// Run validation
validateEnvironment().catch(error => {
  logError(`Validation script failed: ${error.message}`);
  process.exit(1);
});