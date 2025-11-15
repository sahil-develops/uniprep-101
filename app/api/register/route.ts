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

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !country || !program) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert data into Supabase
    const { data, error } = await supabase
      .from('registrations')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        country: country,
        program: program,
        message: message || null,
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);

      // Handle duplicate email error (PostgreSQL unique constraint violation)
      if (error.code === '23505' || (typeof error.message === 'string' && error.message.includes('duplicate key'))) {
        return NextResponse.json(
          { error: 'This email is already registered' },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { error: 'Failed to save registration', details: error.message },
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
    return NextResponse.json(
      { error: 'Failed to save registration', details: err?.message || 'Unknown error' },
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
