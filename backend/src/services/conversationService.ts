/* eslint-disable @typescript-eslint/no-explicit-any */
import ConversationModel from '../database/models/ConversationModel';
import MessageModel from '../database/models/MessageModel';
import { ConversationRequest } from '../types/conversationTypes';

export async function createConversationService(body: ConversationRequest): Promise<ConversationModel> {
  const conversation = await ConversationModel.create({ ...body }, {
    include: [{ model: MessageModel, as: 'messages' }],
  });

  return conversation;
}

export async function getConversationsService(userId: number): Promise<ConversationModel[] | null> {
  const conversations = await ConversationModel.findAll({
    where: { userId },
  });

  return conversations;
}

export async function getConversationService(
  { id, userId }: { id: string, userId: number },
): Promise<ConversationModel | null> {
  const conversation = await ConversationModel.findOne({
    where: { id, userId },
  });

  return conversation;
}
