'use client';
import AuthContext from '@/context/AuthContext';
import ChatContext from '@/context/ChatContext';
import { fetchMessages } from '@/utils/fetchMessages';
import { KeyboardEvent, useContext, useState } from 'react';
import Message from './components/Message';

export default function Home() {
  const [input, setInput] = useState('');

  const chatContext = useContext(ChatContext);
  const authContext = useContext(AuthContext);

  if (!authContext || !chatContext) {
    throw new Error('Auth or Chat Context is not defined');
  }
  const { setActions } = authContext;
  const { chat, setChat } = chatContext;

  const handleSendMessage = async () => {
    if (input.length === 0) {
      return;
    }

    const message = await fetchMessages(input);

    if (message?.actions) {
      setActions((prev) => ({ ...prev, ...message.actions }));
    }

    setChat((messages) => [...messages, { sender: 'user', content: input }, { sender: 'bot', content: message?.content, options: message?.options }]);
    setInput('');
  };

  const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <section>
      <div className="mb-4 text-zinc-800">
        {chat.map((message, i) => (
          <Message
            key={ i }
            sender={ message.sender }
            content={ message.content }
            options={ message.options }
          />
        ))}
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
          onClick={ handleSendMessage }
        >
          Send
        </button>
      </div>
    </section>
  );
}
