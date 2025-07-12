import dotenv from 'dotenv'

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' })

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY  
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

console.log('🔍 Testing database access with different clients...\n')

console.log('Environment check:')
console.log('- Supabase URL:', supabaseUrl ? '✅ Present' : '❌ Missing')
console.log('- Anon Key:', supabaseAnonKey ? '✅ Present' : '❌ Missing')
console.log('- Service Key:', supabaseServiceKey ? '✅ Present' : '❌ Missing')
console.log()

// Test with anonymous client (like health check is using)
const anonClient = createClient(supabaseUrl, supabaseAnonKey)

// Test with admin client (service role)
const adminClient = createClient(supabaseUrl, supabaseServiceKey)

async function testQuery(client, clientName, query, tableName) {
  try {
    console.log(`${clientName} - Testing: ${tableName}`)
    const startTime = Date.now()
    
    const result = await query
    
    const endTime = Date.now()
    const duration = endTime - startTime
    
    console.log(`  ✅ Success: ${result.data?.length || 0} rows, ${duration}ms`)
    if (result.data?.length > 0) {
      console.log(`  📄 Sample row:`, result.data[0])
    }
    return true
  } catch (error) {
    console.log(`  ❌ Error:`, error.message)
    return false
  }
}

async function runTests() {
  console.log('🧪 Testing different query approaches...\n')
  
  // Test 1: information_schema.tables (what health check is trying)
  console.log('1️⃣ Testing information_schema.tables (health check query):')
  await testQuery(
    anonClient,
    'Anonymous Client',
    anonClient.from('information_schema.tables').select('*').limit(5),
    'information_schema.tables'
  )
  await testQuery(
    adminClient,
    'Admin Client',
    adminClient.from('information_schema.tables').select('*').limit(5),
    'information_schema.tables'
  )
  console.log()
  
  // Test 2: pg_tables (alternative system table)
  console.log('2️⃣ Testing pg_tables (alternative):')
  await testQuery(
    anonClient,
    'Anonymous Client',
    anonClient.from('pg_tables').select('*').limit(5),
    'pg_tables'
  )
  await testQuery(
    adminClient,
    'Admin Client',
    adminClient.from('pg_tables').select('*').limit(5),
    'pg_tables'
  )
  console.log()
  
  // Test 3: Direct SQL query
  console.log('3️⃣ Testing direct SQL query:')
  try {
    const { data, error } = await adminClient.rpc('sql', {
      query: 'SELECT table_name FROM information_schema.tables WHERE table_schema = \'public\' LIMIT 5'
    })
    if (error) {
      console.log('  ❌ RPC Error:', error.message)
    } else {
      console.log('  ✅ RPC Success:', data)
    }
  } catch (error) {
    console.log('  ❌ RPC Exception:', error.message)
  }
  console.log()
  
  // Test 4: Check if there are any user tables we can query
  console.log('4️⃣ Testing user tables from schema:')
  
  // Try some common table names that might exist
  const testTables = ['profiles', 'users', 'audit_logs', 'mcp_validations']
  
  for (const tableName of testTables) {
    await testQuery(
      adminClient,
      'Admin Client',
      adminClient.from(tableName).select('*').limit(1),
      tableName
    )
  }
  console.log()
  
  // Test 5: Try to get table names a different way
  console.log('5️⃣ Testing alternative schema queries:')
  try {
    // This should work with service role
    const { data, error } = await adminClient
      .from('information_schema.columns')
      .select('table_name')
      .eq('table_schema', 'public')
      .limit(5)
    
    if (error) {
      console.log('  ❌ Columns query error:', error.message)
    } else {
      console.log('  ✅ Found tables via columns:', data?.map(r => r.table_name))
    }
  } catch (error) {
    console.log('  ❌ Columns query exception:', error.message)
  }
}

runTests().catch(console.error)