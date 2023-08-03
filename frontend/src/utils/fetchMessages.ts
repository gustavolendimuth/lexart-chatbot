import { fetchAPI } from './fetchAPI';

export async function fetchMessages(content: string) {
  return fetchAPI('/api/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ content })
  });
}
