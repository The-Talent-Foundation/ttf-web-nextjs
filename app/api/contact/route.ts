import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createClient } from '@supabase/supabase-js';

const contactSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  companyName: z.string().optional(),
  title: z.string().optional(),
  message: z.string().optional(),
  privacyConsent: z.boolean().refine((val) => val === true, 'You must agree to the privacy policy'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);
    
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
    
    // Insert inquiry into database
    const { data, error } = await supabase
      .from('inquiries')
      .insert([{
        full_name: validatedData.fullName,
        email: validatedData.email,
        company_name: validatedData.companyName,
        title: validatedData.title,
        message: validatedData.message,
        privacy_consent: validatedData.privacyConsent,
      }])
      .select()
      .single();
    
    if (error) {
      console.error('Database error:', error);
      throw error;
    }
    
    // TODO: Send email notification using SendGrid
    // await sendContactNotification(validatedData);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your inquiry. We will get back to you soon.',
      data 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to submit inquiry. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Contact API is working',
    timestamp: new Date().toISOString() 
  });
}