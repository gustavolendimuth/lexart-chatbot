/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import * as conversationService from '../services/conversationService';
import HttpException from '../utils/HttpException';

export async function createConversationController(req: Request, res: Response): Promise<void> {
  const { body } = req;
  const { userId } = req.body.login.data.id;

  const conversation = await conversationService.createConversation({ ...body, userId });
  res.status(201).json(conversation);
}

export async function getConversationsController(req: Request, res: Response): Promise<void> {
  const { userId } = req.body.login.data.id;

  if (!userId) {
    throw new HttpException(401, 'User id is required');
  }

  const conversations = await conversationService.getConversations(userId);
  res.status(200).json(conversations);
}

export async function getConversationController(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { userId } = req.body.login.data.id;

  const conversation = await conversationService.getConversation({ id, userId });
  res.status(200).json(conversation);
}
