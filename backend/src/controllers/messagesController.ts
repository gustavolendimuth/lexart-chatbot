import { Request, Response } from 'express';
import { loggedInMessagesService, loggedOutMessagesService } from '../services/messagesService';

export function loggedOutMessagesController(req: Request, res: Response) {
  const { message } = req.body;

  const response = loggedOutMessagesService(message);
  res.status(200).json(response);
}

export function loggedInMessagesController(req: Request, res: Response) {
  const { message } = req.body;

  const response = loggedInMessagesService(message);
  res.status(200).json(response);
}
