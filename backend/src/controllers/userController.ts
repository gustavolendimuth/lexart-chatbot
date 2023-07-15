/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import { createUserService } from '../services/userService';

export async function createUserController(req: Request, res: Response) {
  const user = await createUserService(req.body);
  return res.status(201).json(user);
}
