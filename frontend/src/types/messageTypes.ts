export interface MessageProps {
  sender: string;
  content: string;
  length?: number;
  options?: [
    {
      content: string;
      link: string;
      text: string;
    }
  ]
}

export type Actions = {
  login?: boolean;
}

export interface MessageResponse extends MessageProps {
  term?: string;
  actions?: Actions;
  error?: string;
}