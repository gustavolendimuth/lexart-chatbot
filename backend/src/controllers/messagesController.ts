import { Request, Response } from 'express';
import { loggedInMessagesService, loggedOutMessagesService } from '../services/messagesService';

export function loggedOutMessagesController(req: Request, res: Response) {
  const { content } = req.body;

  const response = loggedOutMessagesService(content);
  res.status(200).json(response);
}

export function loggedInMessagesController(req: Request, res: Response) {
  const { content } = req.body;

  const response = loggedInMessagesService(content);
  res.status(200).json(response);
}
