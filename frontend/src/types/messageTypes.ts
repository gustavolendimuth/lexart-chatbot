export interface MessageProps {
  role: 'user' | 'bot';
  message: string;
}

export type Actions = {
  login: boolean;
  logout: boolean;
  register: boolean;
}

export interface MessageResponse {
  term?: string;
  message: string;
  actions: Actions;
  options?: [
    {
      message: string;
      link: string;
      text: string;
    }
  ]
}
