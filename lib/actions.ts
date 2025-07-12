'use server'

import { getServerSupabaseClient } from './supabase-server'
import { revalidatePath } from 'next/cache'
import type { InquiryInsert } from '@/types/database'

// Test database connection
export async function testDatabaseConnection() {
  try {
    const supabase = await getServerSupabaseClient()
    
    // Simple test query to check connection
    const { data, error } = await supabase
      .from('profiles')
      .select('id')
      .limit(1)

    if (error) {
      console.error('Database connection test failed:', error)
      return { 
        success: false, 
        error: error.message,
        details: 'Failed to connect to database'
      }
    }

    return { 
      success: true, 
      message: 'Database connection successful!',
      timestamp: new Date().toISOString()
    }
  } catch (error) {
    console.error('Unexpected error during database test:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      details: 'Unexpected error occurred'
    }
  }
}

// Create a test inquiry
export async function createInquiry(inquiryData: InquiryInsert) {
  try {
    const supabase = await getServerSupabaseClient()
    
    // Validate required fields
    if (!inquiryData.full_name || !inquiryData.email || !inquiryData.message) {
      return {
        success: false,
        error: 'Missing required fields: full_name, email, and message are required'
      }
    }

    // Insert the inquiry
    const { data, error } = await supabase
      .from('inquiries')
      .insert([{
        ...inquiryData,
        status: inquiryData.status || 'pending',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()

    if (error) {
      console.error('Failed to create inquiry:', error)
      return {
        success: false,
        error: error.message,
        details: 'Failed to insert inquiry into database'
      }
    }

    // Revalidate the path to update any cached data
    revalidatePath('/test-db')

    return {
      success: true,
      message: 'Inquiry created successfully!',
      data: data[0],
      timestamp: new Date().toISOString()
    }
  } catch (error) {
    console.error('Unexpected error creating inquiry:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      details: 'Unexpected error occurred while creating inquiry'
    }
  }
}

// Get all inquiries (for testing purposes)
export async function getInquiries() {
  try {
    const supabase = await getServerSupabaseClient()
    
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Failed to fetch inquiries:', error)
      return {
        success: false,
        error: error.message,
        details: 'Failed to fetch inquiries from database'
      }
    }

    return {
      success: true,
      data: data,
      count: data.length,
      timestamp: new Date().toISOString()
    }
  } catch (error) {
    console.error('Unexpected error fetching inquiries:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      details: 'Unexpected error occurred while fetching inquiries'
    }
  }
}

// Test profile operations
export async function testProfileOperations() {
  try {
    const supabase = await getServerSupabaseClient()
    
    // Check if we can read profiles
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .limit(5)

    if (error) {
      console.error('Failed to test profile operations:', error)
      return {
        success: false,
        error: error.message,
        details: 'Failed to read profiles table'
      }
    }

    return {
      success: true,
      message: 'Profile operations test successful!',
      profileCount: data.length,
      sampleData: data,
      timestamp: new Date().toISOString()
    }
  } catch (error) {
    console.error('Unexpected error testing profiles:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      details: 'Unexpected error occurred while testing profiles'
    }
  }
}