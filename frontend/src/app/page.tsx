'use client';
import AuthContext from '@/context/authContext';
import useLogin from '@/hooks/useLogin';
import { MessageProps, MessageResponse } from '@/types/messageTypes';
import Image from 'next/image';
import { useContext, useState } from 'react';
import lexartLogo from '../img/lex-white.svg';
import LoginModal from './login/loginModal';
import Message from './message/message';

export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [input, setInput] = useState('');

  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('useLogin must be used within an AuthProvider');
  }
  const { setActions } = authContext;

  useLogin();

  const handleSend = async () => {
    if (input.length === 0) {
      return;
    }

    const response = await fetch(`${apiUrl}/messages/logged-out`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // 'Authorization': token
        // 'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({ message: input }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json() as MessageResponse;

    if (result.actions) {
      setActions((prev) => ({ ...prev, ...result.actions }));
    }

    setMessages([...messages, { role: 'user', message: input }, { role: 'bot', message: result.message }]);

    setInput('');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      <LoginModal />
      <div className="p-4 h-screen flex flex-col items-center justify-center">
        <div>
          <Image alt="Lexart Logo" src={ lexartLogo } width={ 320 } height={ 320 } className="pb-6" />
        </div>
        <div className="mb-4 text-zinc-800">
          {messages.map((message, i) => <Message key={ i } role={ message.role } message={ message.message } />)}
        </div>
        <div>
          <input
            className="text-zinc-800 flex-grow mr-2 bg-gray-100 border rounded-lg py-2 px-4 focus:outline-none"
            value={ input }
            onChange={ (e) => setInput(e.target.value) }
            onKeyDown={ handleKeyDown }
          />
          <button
            type="button"
            className="bg-cyan-500 text-white px-4 py-2 rounded"
            onClick={ handleSend }
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}
