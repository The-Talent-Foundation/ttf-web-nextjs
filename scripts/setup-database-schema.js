#!/usr/bin/env node
import { config } from 'dotenv';

// Load environment variables before any imports
config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing required environment variables');
  process.exit(1);
}

// Execute SQL using REST API directly
async function executeSQL(sql) {
  const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${supabaseServiceKey}`,
      'apikey': supabaseServiceKey
    },
    body: JSON.stringify({ query: sql })
  });

  if (!response.ok) {
    // Try alternative method using direct SQL execution
    const sqlResponse = await fetch(`${supabaseUrl}/rest/v1/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/vnd.pgrst.object+json',
        'Authorization': `Bearer ${supabaseServiceKey}`,
        'apikey': supabaseServiceKey
      },
      body: sql
    });
    
    if (!sqlResponse.ok) {
      throw new Error(`SQL execution failed: ${response.status} ${await response.text()}`);
    }
    return await sqlResponse.json();
  }
  
  return await response.json();
}

async function setupDatabaseSchema() {
  console.log('🏗️ Setting up database schema...\n');

  try {
    // Create users table
    console.log('📝 Creating users table...');
    const usersTableSQL = `
      CREATE TABLE IF NOT EXISTS public.users (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
      
      -- Enable Row Level Security
      ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
    `;

    try {
      await executeSQL(usersTableSQL);
      console.log('✅ Users table created successfully');
    } catch (error) {
      console.log('⚠️  Direct SQL failed, creating via manual SQL...');
      console.log('📋 Users table SQL:');
      console.log(usersTableSQL);
    }

    // Create inquiries table
    console.log('📝 Creating inquiries table...');
    const inquiriesTableSQL = `
      CREATE TABLE IF NOT EXISTS public.inquiries (
        id SERIAL PRIMARY KEY,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL,
        company_name TEXT,
        title TEXT,
        message TEXT,
        privacy_consent BOOLEAN NOT NULL DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW()
      );
      
      -- Enable Row Level Security
      ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
    `;

    try {
      await executeSQL(inquiriesTableSQL);
      console.log('✅ Inquiries table created successfully');
    } catch (error) {
      console.log('⚠️  Direct SQL failed, creating via manual SQL...');
      console.log('📋 Inquiries table SQL:');
      console.log(inquiriesTableSQL);
    }

  } catch (error) {
    console.error('❌ Schema setup failed:', error.message);
    console.log('\n📋 Manual SQL Statements:');
    console.log('Copy and paste these into the Supabase SQL Editor:');
    console.log('\n-- Users table:');
    console.log(`CREATE TABLE IF NOT EXISTS public.users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;`);
    
    console.log('\n-- Inquiries table:');
    console.log(`CREATE TABLE IF NOT EXISTS public.inquiries (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company_name TEXT,
  title TEXT,
  message TEXT,
  privacy_consent BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;`);
  }

  // Import Supabase client for verification
  const { createClient } = await import('@supabase/supabase-js');
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  // Verify tables exist
  console.log('\n🔍 Verifying schema setup...');
  
  const tablesToCheck = ['users', 'inquiries'];
  
  for (const table of tablesToCheck) {
    try {
      const { data, error } = await supabase
        .from(table)
        .select('*')
        .limit(1);
      
      if (error) {
        console.log(`❌ Table '${table}': ${error.message}`);
      } else {
        console.log(`✅ Table '${table}': accessible (${data?.length || 0} rows found)`);
        
        // Insert test data if table is accessible and empty
        if (data.length === 0) {
          try {
            if (table === 'users') {
              const { error: insertError } = await supabase
                .from('users')
                .insert([{ username: 'health_check_user', password: 'test_password' }]);
              
              if (!insertError) {
                console.log(`   ✅ Test data inserted into ${table}`);
              }
            } else if (table === 'inquiries') {
              const { error: insertError } = await supabase
                .from('inquiries')
                .insert([{
                  full_name: 'Health Check',
                  email: 'test@example.com',
                  company_name: 'Test Company',
                  title: 'Test Inquiry',
                  message: 'This is a test inquiry for health checks',
                  privacy_consent: true
                }]);
              
              if (!insertError) {
                console.log(`   ✅ Test data inserted into ${table}`);
              }
            }
          } catch (insertError) {
            console.log(`   ⚠️  Could not insert test data into ${table}`);
          }
        }
      }
    } catch (error) {
      console.log(`❌ Table '${table}': ${error.message}`);
    }
  }

  console.log('\n🏁 Schema setup complete!');
  console.log('💡 If tables still don\'t exist, copy the SQL statements above and run them in:');
  console.log('   https://supabase.com/dashboard/project/YOUR_PROJECT/sql');
}

setupDatabaseSchema().catch(console.error);