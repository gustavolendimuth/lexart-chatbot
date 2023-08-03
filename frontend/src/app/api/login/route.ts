import { http } from '@/utils/httpService';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const { login } = await req.json();

  if (!API_URL) {
    throw new Error('Api url is not defined');
  }
  if (!login) {
    throw new Error('Login is not defined');
  }

  const url = new URL(API_URL);
  url.pathname = 'log/in';

  const response = await http.post(url.href, login, { withCredentials: true });
  const responseHeaders = response.headers as HeadersInit;

  if (responseHeaders) {
    const requestHeaders = new Headers(responseHeaders);
    return NextResponse.json(response.data, { headers: requestHeaders });
  }

  return NextResponse.json(response.data);
}