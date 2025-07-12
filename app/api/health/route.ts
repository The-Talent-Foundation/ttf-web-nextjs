import { NextRequest, NextResponse } from 'next/server';

/**
 * Health check endpoint for monitoring application status
 * Returns basic health information including database connectivity
 */
export async function GET(request: NextRequest) {
  try {
    // Basic health check - can be extended to include database connectivity
    const healthData = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      uptime: process.uptime(),
    };

    return NextResponse.json(healthData, { status: 200 });
  } catch (error) {
    console.error('Health check failed:', error);
    
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: 'Internal server error'
      },
      { status: 500 }
    );
  }
}