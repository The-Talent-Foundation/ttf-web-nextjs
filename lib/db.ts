import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '@/shared/schema';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required');
}

// Create the connection
const connectionString = process.env.DATABASE_URL;

// Create a postgres client with connection pooling
const client = postgres(connectionString, {
  max: 10, // Maximum number of connections in the pool
  idle_timeout: 20, // Close idle connections after 20 seconds
  connect_timeout: 10, // Timeout for new connections
  prepare: false, // Disable prepared statements for serverless compatibility
});

// Create the drizzle instance
export const db = drizzle(client, { schema });

// Export the client for cleanup if needed
export { client };

// Type exports
export type Database = typeof db;