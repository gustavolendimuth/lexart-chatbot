'use client';
import { ReactNode, useState } from 'react';
import AuthContext from './authContext';

type Props = {
  children: ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const [user, setUser] = useState({ email: '' });
  const [token, setToken] = useState('');
  const [login, setLogin] = useState({ email: '', password: '' });
  const [actions, setActions] = useState(['']);

  const context = {
    user,
    setUser,
    token,
    setToken,
    login,
    setLogin,
    actions,
    setActions,
  };

  return (
    <AuthContext.Provider value={ context }>
      {children}
    </AuthContext.Provider>
  );
}

