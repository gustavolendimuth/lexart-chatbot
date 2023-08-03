/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import AuthContext from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import LoginForm from './components/LoginForm';

function Login() {
  const router = useRouter();
  const userContext = useContext(AuthContext);

  if (!userContext) {
    throw new Error('UserContext is undefined');
  }

  const { user } = userContext;

  useEffect(() => {
    if (user?.email) {
      if (window.history.length > 0) {
        router.back();
      } else {
        router.push('/');
      }
    }
  }, [user?.email]);

  if (user?.email) {
    return null;
  }

  return (
    <section>
      <LoginForm />
    </section>
  );
}

export default Login;
