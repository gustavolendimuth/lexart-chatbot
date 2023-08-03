import { toast } from 'react-toastify';

export async function fetchAPI(url: string, options: RequestInit) {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if (result?.error) {
      throw new Error(result.error);
    }
    return result;
  } catch (error) {
    console.error(error);
    toast.error('An unexpected error occurred!');
  }
}
