import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { inquiries, insertInquirySchema } from '@/shared/schema';
import { verifyToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = insertInquirySchema.parse(body);

    // Create inquiry
    const [newInquiry] = await db
      .insert(inquiries)
      .values(validatedData)
      .returning();

    return NextResponse.json(
      { 
        message: 'Inquiry submitted successfully',
        inquiry: newInquiry
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Inquiry creation error:', error);
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid data provided', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Verify authentication for getting all inquiries
    const token = request.cookies.get('auth-token')?.value;
    
    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const decoded = await verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    // Get all inquiries
    const allInquiries = await db
      .select()
      .from(inquiries)
      .orderBy(inquiries.createdAt);

    return NextResponse.json(allInquiries);
  } catch (error) {
    console.error('Get inquiries error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}