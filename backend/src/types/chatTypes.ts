import MessageModel from '../database/models/MessageModel';
import UserModel from '../database/models/UserModel';

export interface ChatRequest {
  userId: number;
  messages: MessageModel[];
}

export interface ChatResponse {
  id: number;
  user: UserModel;
  messages: MessageModel[];
}
