/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';
import {
  createChatService,
  getChatService,
  getChatsService,
} from '../services/chatService';
import { RequestWithUser } from '../types/userTypes';
import HttpException from '../utils/HttpException';

export async function createChatController(req: RequestWithUser, res: Response): Promise<void> {
  const { body: messages, user } = req;

  if (!user || !user.id) {
    throw new HttpException(401, 'User not authenticated');
  }

  const conversation = await createChatService({ ...messages, userId: user.id });
  res.status(201).json(conversation);
}

export async function getChatsController(req: RequestWithUser, res: Response): Promise<void> {
  const userId = req.user?.id;

  if (!userId) {
    throw new HttpException(401, 'User id is required');
  }

  const conversations = await getChatsService(userId);
  res.status(200).json(conversations);
}

export async function getChatController(req: RequestWithUser, res: Response): Promise<void> {
  const { id } = req.params;
  const userId = req.user?.id;

  if (!userId || !id) {
    throw new HttpException(401, 'User id and conversation id are required');
  }

  const conversation = await getChatService({ id, userId });
  res.status(200).json(conversation);
}
