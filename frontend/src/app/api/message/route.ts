import { http } from '@/utils/httpService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  const incomingHeaders = Object.fromEntries(req.headers.entries());

  const { content } = await req.json();

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  if (!API_URL) {
    return NextResponse.json({ error: 'API_URL is not defined' }, { status: 500 });
  }
  const url = new URL(API_URL);
  url.pathname = token ? 'messages/logged-in' : 'messages/logged-out';

  const response = await http.post(url.href, { content }, { headers: incomingHeaders, withCredentials: true });
  const responseHeaders = response.headers as HeadersInit;

  console.log('Response Headers', responseHeaders);

  return NextResponse.json(response.data, { status: response.status, headers: responseHeaders });
}
