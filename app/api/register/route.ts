import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Define explicit error type for catch
type ErrorWithMessage = {
  message: string;
  code?: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, country, program, message } = body;

    // Validate required fields (phone and country are optional based on form)
    if (!firstName || !lastName || !email || !program) {
      return NextResponse.json(
        { error: 'Missing required fields: firstName, lastName, email, and program are required' },
        { status: 400 }
      );
    }

    // Check if Supabase client is properly initialized
    if (!supabase) {
      console.error('Supabase client is not initialized');
      return NextResponse.json(
        { error: 'Database connection not configured. Please check your environment variables.' },
        { status: 500 }
      );
    }

    // Insert data into Supabase
    const { data, error } = await supabase
      .from('registrations')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone || null,
        country: country || null,
        program: program,
        message: message || null,
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error details:', {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
      });

      // Handle duplicate email error (PostgreSQL unique constraint violation)
      if (error.code === '23505' || (typeof error.message === 'string' && error.message.includes('duplicate key'))) {
        return NextResponse.json(
          { error: 'This email is already registered' },
          { status: 409 }
        );
      }

      // Handle RLS (Row Level Security) policy violations
      if (error.code === '42501' || error.message?.includes('permission denied') || error.message?.includes('policy')) {
        return NextResponse.json(
          { 
            error: 'Database permission error. Please check your Supabase Row Level Security policies.',
            details: error.message 
          },
          { status: 500 }
        );
      }

      // Handle connection errors
      if (error.message?.includes('fetch') || error.message?.includes('network') || error.message?.includes('connection')) {
        return NextResponse.json(
          { 
            error: 'Database connection error. Please ensure your Supabase project is active and accessible.',
            details: error.message 
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { 
          error: 'Failed to save registration', 
          details: error.message,
          code: error.code 
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Registration saved successfully',
        id: data?.id
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Unexpected error:', error);
    const err = error as ErrorWithMessage;
    
    // Check if it's a JSON parsing error
    if (err.message?.includes('JSON') || err.message?.includes('Unexpected token')) {
      return NextResponse.json(
        { error: 'Invalid request format', details: err.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        error: 'Failed to save registration', 
        details: err?.message || 'Unknown error',
        stack: process.env.NODE_ENV === 'development' ? (err as Error)?.stack : undefined
      },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve registrations (for admin use)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_request: NextRequest) {
  try {
    const { data, error } = await supabase
      .from('registrations')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch registrations', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ registrations: data }, { status: 200 });
  } catch (error: unknown) {

    console.error('Unexpected error:', error);
    const err = error as ErrorWithMessage;
    return NextResponse.json(
      { error: 'Failed to fetch registrations', details: err?.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
