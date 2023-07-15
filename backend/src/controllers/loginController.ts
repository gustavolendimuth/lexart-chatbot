/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import { loginService } from '../services/loginService';

export async function loginController(req: Request, res: Response) {
  const response = await loginService(req.body);

  return res.status(200).json(response);
}
