import { Login } from '@/types/userTypes';

export default async function fetchLogin({ login, endpoint }: { login?: Login, endpoint: string }) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  if (!API_URL) {
    throw new Error('API_URL is not defined');
  }
  const url = new URL(API_URL);
  url.pathname = `log/${endpoint}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(login),
    credentials: 'include',
  });

  const result = await response.json();
  return { response, result };
};
