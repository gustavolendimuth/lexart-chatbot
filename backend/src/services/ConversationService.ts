/* eslint-disable @typescript-eslint/no-explicit-any */
import ConversationModel from '../database/models/ConversationModel';
import MessageModel from '../database/models/MessageModel';
import { ConversationRequest } from '../interfaces/Conversation';

export async function createConversation(body: ConversationRequest): Promise<void> {
  try {
    await ConversationModel.create({ ...body }, {
      include: [{ model: MessageModel, as: 'messages' }],
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getConversations(userId: string): Promise<ConversationModel[]> {
  try {
    const response = await ConversationModel.findAll({
      where: { userId },
    });
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getConversation(
  { id, userId }: { id: string, userId: string },
): Promise<ConversationModel | null> {
  try {
    const response = await ConversationModel.findOne({
      where: { id, userId },
    });
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
