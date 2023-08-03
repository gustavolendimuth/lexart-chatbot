'use client';
import AuthContext from '@/context/AuthContext';
import { fetchAPI } from '@/utils/fetchAPI';
import fetchLogin from '@/utils/fetchLogin';
import { useContext, useEffect } from 'react';

const useLogin = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('useLogin must be used within an AuthProvider');
  }

  const { login, user, setUser, setActions, setToken } = authContext;

  useEffect(() => {
    const userLogin = async () => {
      if (!login?.email || !login?.password) {
        return;
      }

      const data = await fetchAPI('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login })
      });

      setUser(data?.user);
      setToken(data?.token);
    };

    userLogin();
  }, [login, setUser, setToken]);

  useEffect(() => {
    if (user?.email) {
      setActions((prev) => ({ ...prev, login: false }));
    }
  }, [user?.email, setActions]);

  useEffect(() => {
    const checkToken = async () => {
      const { token } = await fetchAPI('api/token', { method: 'GET' });

      if (!user && token) {
        const { result: user } = await fetchLogin({ endpoint: 'check' });
        console.log('User',user);

        if (user) {
          setUser(user);
        }
      }
    };
    checkToken();
  });
};

export default useLogin;
