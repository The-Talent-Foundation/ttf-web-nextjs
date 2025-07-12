import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY  // Use service role for admin access
)

console.log('🔍 Checking existing tables in database...')

// Query actual tables that exist
let tables = null
let error = null

try {
  const result = await supabase.rpc('get_tables')
  tables = result.data
  error = result.error
} catch (e) {
  error = e
}

if (error) {
  console.log('RPC call failed, trying direct query...')
  
  // Try a basic query to see what we can access
  const { data: authUsers, error: authError } = await supabase.auth.admin.listUsers()
  
  if (!authError) {
    console.log('✅ Auth admin access works')
    console.log(`Found ${authUsers.users?.length || 0} auth users`)
  }
  
  // Try to query some default Supabase tables
  const defaultTables = ['auth.users', 'storage.buckets', 'storage.objects']
  
  for (const table of defaultTables) {
    try {
      const { data, error } = await supabase
        .from(table.split('.')[1])  // Remove schema prefix
        .select('*')
        .limit(1)
      
      if (!error) {
        console.log(`✅ Table '${table}' exists and is accessible`)
      } else {
        console.log(`❌ Table '${table}': ${error.message}`)
      }
    } catch (err) {
      console.log(`❌ Table '${table}': ${err.message}`)
    }
  }
} else {
  console.log('Tables found:', tables)
}

// Let's also check if we need to create the schema
console.log('\n🏗️ Checking if we need to create database schema...')