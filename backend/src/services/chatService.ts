/* eslint-disable @typescript-eslint/no-explicit-any */
import ChatModel from '../database/models/ChatModel';
import MessageModel from '../database/models/MessageModel';
import { ChatRequest } from '../types/chatTypes';

export async function createChatService(body: ChatRequest): Promise<ChatModel> {
  const chat = await ChatModel.create({ ...body }, {
    include: [{ model: MessageModel, as: 'messages' }],
  });

  return chat;
}

export async function getChatsService(userId: number): Promise<ChatModel[] | null> {
  const chat = await ChatModel.findAll({
    where: { userId },
  });

  return chat;
}

export async function getChatService(
  { id, userId }: { id: string, userId: number },
): Promise<ChatModel | null> {
  const chat = await ChatModel.findOne({
    where: { id, userId },
  });

  return chat;
}
