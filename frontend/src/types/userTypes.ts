export interface User {
  id?: number;
  name?: string;
  email: string;
  role?: string;
};

export interface Login extends User {
  password: string;
}

export type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};