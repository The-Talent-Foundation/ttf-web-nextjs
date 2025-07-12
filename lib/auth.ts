import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is required');
}

const JWT_SECRET = process.env.JWT_SECRET;
const TOKEN_EXPIRY = '24h';

export interface TokenPayload {
  userId: number;
  email: string;
  iat?: number;
  exp?: number;
}

/**
 * Generate a JWT token for a user
 */
export function generateToken(payload: Omit<TokenPayload, 'iat' | 'exp'>): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
}

/**
 * Verify and decode a JWT token
 */
export function verifyToken(token: string): TokenPayload {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
}

/**
 * Get the auth token from cookies
 */
export async function getTokenFromCookies(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token');
  return token?.value || null;
}

/**
 * Get the auth token from request headers or cookies
 */
export function getTokenFromRequest(request: NextRequest): string | null {
  // First try Authorization header
  const authHeader = request.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }

  // Fallback to cookies
  const token = request.cookies.get('auth-token');
  return token?.value || null;
}

/**
 * Verify the current user from cookies
 */
export async function getCurrentUser(): Promise<TokenPayload | null> {
  try {
    const token = await getTokenFromCookies();
    if (!token) {
      return null;
    }
    return verifyToken(token);
  } catch (error) {
    return null;
  }
}

/**
 * Verify the current user from request
 */
export function getCurrentUserFromRequest(request: NextRequest): TokenPayload | null {
  try {
    const token = getTokenFromRequest(request);
    if (!token) {
      return null;
    }
    return verifyToken(token);
  } catch (error) {
    return null;
  }
}

/**
 * Check if user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser();
  return user !== null;
}

/**
 * Check if user is authenticated from request
 */
export function isAuthenticatedFromRequest(request: NextRequest): boolean {
  return getCurrentUserFromRequest(request) !== null;
}