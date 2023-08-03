'use client';
import AuthContext from '@/context/AuthContext';
import useLogin from '@/hooks/useLogin';
import lexartLogo from '@/img/lex-white.svg';
import { http } from '@/utils/httpService';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

export default function Header() {
  useLogin();
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }
  const { user, setUser } = authContext;

  return (
    <div>
      <Image alt="Lexart Logo" src={ lexartLogo } width={ 320 } height={ 320 } className="pb-6" />
      {
        user ?
          <button
            type='button'
            onClick={ () => {setUser(undefined); http.post('/api/logout');} }
          >Logout
          </button> : <Link href='/login'>Login</Link>
      }
      <p>{user && user.name}</p>
    </div>
  );
}
