/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import AuthContext from '@/context/authContext';
import { User } from '@/types/userTypes';
import fetchLogin from '@/utils/fetchLogin';
import jwtDecode from 'jwt-decode';
import { useContext, useEffect } from 'react';

const useLogin = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('useLogin must be used within an AuthProvider');
  }
  const { login, setUser, setToken } = authContext;

  useEffect(() => {
    const userLogin = async () => {
      try {
        if (!login?.email || !login?.password) {
          throw new Error('Invalid login');
        }

        const { result } = await fetchLogin(login);

        if (result?.token) {
          throw new Error('Token is missing');
        }

        const decodedUser: User = jwtDecode(result.token);
        if (!decodedUser) {
          throw new Error('Invalid token');
        }

        setUser(decodedUser);
        setToken(result.token);
      } catch (error: any) {
        console.log('User Login Error:', error.message);
      }
    };

    userLogin();
  }, [login]);
};

export default useLogin;
