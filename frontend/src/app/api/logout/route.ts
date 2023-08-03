import { http } from '@/utils/httpService';
import { NextResponse } from 'next/server';

export async function POST() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  if (!API_URL) {
    throw new Error('Api url is not defined');
  }
  const url = new URL(API_URL);
  url.pathname = '/log/out';

  const response = await http.post(url.href, '', { withCredentials: true });
  const responseHeaders = response.headers as HeadersInit;

  console.log('Response Headers', responseHeaders);

  return NextResponse.json(response.data, { status: response.status, headers: responseHeaders });
}