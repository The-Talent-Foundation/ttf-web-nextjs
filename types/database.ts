// Database Types for Supabase Tables
// Generated from migration: 20250708092937_create_users_and_inquiries_tables.sql

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile
        Insert: ProfileInsert
        Update: ProfileUpdate
      }
      inquiries: {
        Row: Inquiry
        Insert: InquiryInsert
        Update: InquiryUpdate
      }
    }
  }
}

// Profiles Table Types (extends Supabase auth.users)
export interface Profile {
  id: string // UUID - references auth.users(id)
  username: string | null
  full_name: string | null
  avatar_url: string | null
  created_at: string // ISO timestamp
  updated_at: string // ISO timestamp
}

export interface ProfileInsert {
  id: string // Required - must match auth.users id
  username?: string | null
  full_name?: string | null
  avatar_url?: string | null
  created_at?: string
  updated_at?: string
}

export interface ProfileUpdate {
  username?: string | null
  full_name?: string | null
  avatar_url?: string | null
  updated_at?: string
}

// Inquiries Table Types
export type InquiryStatus = 'pending' | 'reviewed' | 'responded' | 'closed'

export interface Inquiry {
  id: string // UUID - auto-generated
  full_name: string
  email: string
  company_name: string | null
  title: string | null
  message: string
  privacy_consent: boolean
  status: InquiryStatus
  created_at: string // ISO timestamp
  updated_at: string // ISO timestamp
}

export interface InquiryInsert {
  id?: string // Optional - will be auto-generated if not provided
  full_name: string
  email: string
  company_name?: string | null
  title?: string | null
  message: string
  privacy_consent: boolean
  status?: InquiryStatus // Defaults to 'pending'
  created_at?: string
  updated_at?: string
}

export interface InquiryUpdate {
  full_name?: string
  email?: string
  company_name?: string | null
  title?: string | null
  message?: string
  privacy_consent?: boolean
  status?: InquiryStatus
  updated_at?: string
}

// Utility types for form handling
export interface ContactFormData {
  full_name: string
  email: string
  company_name?: string
  title?: string
  message: string
  privacy_consent: boolean
}

// Auth-related types
export interface AuthUser {
  id: string
  email?: string
  profile?: Profile
}