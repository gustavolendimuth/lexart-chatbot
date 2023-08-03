'use client';
import { ReactNode, useState } from 'react';
import ChatContext from './ChatContext';

export default function ChatProvider({ children }: { children: ReactNode }) {
  const [chat, setChat] = useState([{ sender: 'bot', content: 'teste' }]);

  const context = {
    chat,
    setChat
  };

  return (
    <ChatContext.Provider value={ context }>
      {children}
    </ChatContext.Provider>
  );
}

