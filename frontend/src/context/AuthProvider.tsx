'use client';
import { Actions } from '@/types/messageTypes';
import { Login, User } from '@/types/userTypes';
import { ReactNode, useState } from 'react';
import AuthContext from './AuthContext';

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | undefined>();
  const [token, setToken] = useState<string | undefined>();
  const [login, setLogin] = useState<Login | undefined>();
  const [actions, setActions] = useState<Actions | undefined>();

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

