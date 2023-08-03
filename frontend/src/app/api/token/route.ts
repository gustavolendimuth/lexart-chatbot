import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const token = cookies().get('token')?.value;

  if (!token) {
    console.log(token);
    return NextResponse.json({ message: 'error' });
  };

  return NextResponse.json({ token });
}