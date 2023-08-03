import { MessageProps } from '@/types/messageTypes';
import { createContext } from 'react';

type ChatContextType = {
  chat: MessageProps[];
  setChat: React.Dispatch<React.SetStateAction<MessageProps[]>>;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export default ChatContext;
