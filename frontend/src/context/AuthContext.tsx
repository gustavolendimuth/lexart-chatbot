import { Actions } from '@/types/messageTypes';
import { Dispatch, SetStateAction, createContext } from 'react';
import { Login, User } from '../types/userTypes';

type AuthContextType = {
  user?: User;
  setUser: Dispatch<SetStateAction<User | undefined>>;
  token?: string;
  setToken: Dispatch<SetStateAction<string | undefined>>;
  login?: Login;
  setLogin: Dispatch<SetStateAction<Login | undefined>>;
  actions?: Actions;
  setActions: Dispatch<SetStateAction<Actions | undefined>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
