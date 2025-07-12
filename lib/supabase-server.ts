import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { Database } from '@/types/database'

export const createClient = (cookieStore: Awaited<ReturnType<typeof cookies>>) => {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}

// For use in Server Components, Server Actions, and Route Handlers
export const getServerSupabaseClient = async () => {
  const cookieStore = await cookies()
  return createClient(cookieStore)
}

// For middleware
export const createMiddlewareClient = (request: Request) => {
  let response = new Response()

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          const cookie = request.headers.get('cookie')
          if (!cookie) return undefined
          
          const match = cookie.match(new RegExp(`(^| )${name}=([^;]+)`))
          return match ? decodeURIComponent(match[2]) : undefined
        },
        set(name: string, value: string, options: CookieOptions) {
          response.headers.append(
            'Set-Cookie',
            `${name}=${encodeURIComponent(value)}; Path=/; ${options.maxAge ? `Max-Age=${options.maxAge};` : ''} ${options.secure ? 'Secure;' : ''} ${options.httpOnly ? 'HttpOnly;' : ''} ${options.sameSite ? `SameSite=${options.sameSite};` : ''}`
          )
        },
        remove(name: string, options: CookieOptions) {
          response.headers.append(
            'Set-Cookie',
            `${name}=; Path=/; Max-Age=0; ${options.secure ? 'Secure;' : ''} ${options.httpOnly ? 'HttpOnly;' : ''} ${options.sameSite ? `SameSite=${options.sameSite};` : ''}`
          )
        },
      },
    }
  )

  return { supabase, response }
}