import MessageModel from '../database/models/MessageModel';
import UserModel from '../database/models/UserModel';

export interface ConversationRequest {
  userId: number;
  messages: MessageModel[];
}

export interface ConversationResponse {
  id: number;
  user: UserModel;
  messages: MessageModel[];
}
