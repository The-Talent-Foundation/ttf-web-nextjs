'use client'

import { useState } from 'react'
import { testDatabaseConnection, createInquiry, getInquiries, testProfileOperations } from '@/lib/actions'
import type { InquiryInsert } from '@/types/database'

export default function TestDatabasePage() {
  const [results, setResults] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [inquiries, setInquiries] = useState<any[]>([])

  const handleTestConnection = async () => {
    setLoading(true)
    setResults(null)
    
    try {
      const result = await testDatabaseConnection()
      setResults(result)
    } catch (error) {
      setResults({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      })
    } finally {
      setLoading(false)
    }
  }

  const handleCreateTestInquiry = async () => {
    setLoading(true)
    setResults(null)
    
    const testInquiry: InquiryInsert = {
      full_name: 'Test User',
      email: 'test@example.com',
      company_name: 'Test Company',
      title: 'Software Engineer',
      message: 'This is a test inquiry to verify database functionality.',
      privacy_consent: true,
      status: 'pending'
    }
    
    try {
      const result = await createInquiry(testInquiry)
      setResults(result)
      
      // If successful, refresh the inquiries list
      if (result.success) {
        await handleGetInquiries()
      }
    } catch (error) {
      setResults({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      })
    } finally {
      setLoading(false)
    }
  }

  const handleGetInquiries = async () => {
    setLoading(true)
    
    try {
      const result = await getInquiries()
      if (result.success) {
        setInquiries(result.data || [])
        setResults(result)
      } else {
        setResults(result)
      }
    } catch (error) {
      setResults({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      })
    } finally {
      setLoading(false)
    }
  }

  const handleTestProfiles = async () => {
    setLoading(true)
    setResults(null)
    
    try {
      const result = await testProfileOperations()
      setResults(result)
    } catch (error) {
      setResults({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Database Connection Test</h1>
      
      {/* Test Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <button
          onClick={handleTestConnection}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          {loading ? 'Testing...' : 'Test Connection'}
        </button>
        
        <button
          onClick={handleCreateTestInquiry}
          disabled={loading}
          className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          {loading ? 'Creating...' : 'Create Test Inquiry'}
        </button>
        
        <button
          onClick={handleGetInquiries}
          disabled={loading}
          className="bg-purple-500 hover:bg-purple-600 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          {loading ? 'Loading...' : 'Get All Inquiries'}
        </button>
        
        <button
          onClick={handleTestProfiles}
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          {loading ? 'Testing...' : 'Test Profiles'}
        </button>
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="text-center mb-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <p className="mt-2 text-gray-600">Processing...</p>
        </div>
      )}

      {/* Results Display */}
      {results && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Test Results:</h2>
          <div className={`p-4 rounded-lg border ${
            results.success 
              ? 'bg-green-50 border-green-200 text-green-800' 
              : 'bg-red-50 border-red-200 text-red-800'
          }`}>
            <div className="font-semibold mb-2">
              Status: {results.success ? '✅ Success' : '❌ Failed'}
            </div>
            
            {results.message && (
              <div className="mb-2">
                <strong>Message:</strong> {results.message}
              </div>
            )}
            
            {results.error && (
              <div className="mb-2">
                <strong>Error:</strong> {results.error}
              </div>
            )}
            
            {results.details && (
              <div className="mb-2">
                <strong>Details:</strong> {results.details}
              </div>
            )}
            
            {results.timestamp && (
              <div className="text-sm text-gray-600">
                <strong>Timestamp:</strong> {new Date(results.timestamp).toLocaleString()}
              </div>
            )}
            
            {results.count !== undefined && (
              <div className="mb-2">
                <strong>Count:</strong> {results.count}
              </div>
            )}
            
            {results.profileCount !== undefined && (
              <div className="mb-2">
                <strong>Profile Count:</strong> {results.profileCount}
              </div>
            )}
            
            {/* Raw data preview */}
            {results.data && (
              <details className="mt-4">
                <summary className="cursor-pointer font-semibold">Raw Data (click to expand)</summary>
                <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto max-h-40">
                  {JSON.stringify(results.data, null, 2)}
                </pre>
              </details>
            )}
          </div>
        </div>
      )}

      {/* Inquiries List */}
      {inquiries.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Recent Inquiries ({inquiries.length}):</h2>
          <div className="space-y-4">
            {inquiries.slice(0, 5).map((inquiry, index) => (
              <div key={inquiry.id || index} className="bg-gray-50 p-4 rounded-lg border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <strong>Name:</strong> {inquiry.full_name}
                  </div>
                  <div>
                    <strong>Email:</strong> {inquiry.email}
                  </div>
                  <div>
                    <strong>Company:</strong> {inquiry.company_name || 'N/A'}
                  </div>
                  <div>
                    <strong>Status:</strong> 
                    <span className={`ml-2 px-2 py-1 rounded text-xs ${
                      inquiry.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      inquiry.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                      inquiry.status === 'responded' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {inquiry.status}
                    </span>
                  </div>
                  <div className="md:col-span-2">
                    <strong>Message:</strong> {inquiry.message}
                  </div>
                  <div className="md:col-span-2 text-sm text-gray-600">
                    <strong>Created:</strong> {new Date(inquiry.created_at).toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
            {inquiries.length > 5 && (
              <div className="text-center text-gray-600">
                ... and {inquiries.length - 5} more inquiries
              </div>
            )}
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3 text-blue-800">Test Instructions:</h3>
        <ul className="space-y-2 text-blue-700">
          <li><strong>Test Connection:</strong> Verifies basic database connectivity</li>
          <li><strong>Create Test Inquiry:</strong> Creates a sample inquiry record</li>
          <li><strong>Get All Inquiries:</strong> Retrieves and displays all inquiries</li>
          <li><strong>Test Profiles:</strong> Tests profile table operations</li>
        </ul>
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
          <p className="text-yellow-800 text-sm">
            <strong>Note:</strong> This page is for development testing only. 
            Make sure your Supabase database is properly configured and accessible.
          </p>
        </div>
      </div>
    </div>
  )
}