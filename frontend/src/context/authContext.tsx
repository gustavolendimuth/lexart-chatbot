import { Actions } from '@/types/messageTypes';
import { createContext } from 'react';
import { Login, User } from '../types/userTypes';

type AuthContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  login: Login;
  setLogin: React.Dispatch<React.SetStateAction<Login>>;
  actions: Actions;
  setActions: React.Dispatch<React.SetStateAction<Actions>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
