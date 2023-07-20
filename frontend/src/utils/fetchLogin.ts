import { Login } from '@/types/userTypes';

export const fetchLogin = async (login: Login) => {
  try {
    const API_URL = process.env.REACT_APP_PROJECT_API_URL;
    if (!API_URL) {
      throw new Error('API_URL is not defined');
    }

    const url = new URL(API_URL);
    url.pathname = 'login';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(login),
    });

    const result = await response.json();
    return { response, result };
  } catch (error) {
    console.log('Fetch Login Error: ', error);
    return { error };
  }
};

export default fetchLogin;