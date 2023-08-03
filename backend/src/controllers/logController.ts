/* eslint-disable max-lines-per-function */
/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import UserModel from '../database/models/UserModel';
import { loginService } from '../services/logService';
import { validateJwtToken } from '../utils/jwtUtils';

export async function loginController(req: Request, res: Response) {
  const { token, user } = await loginService(req.body);

  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });

  return res.status(200).json({ message: 'Login successfully', user });
}

export async function logoutController(req: Request, res: Response) {
  res.cookie('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    expires: new Date(0),
    path: '/',
  });

  res.status(200).json({ message: 'Logout successful' });
}

export async function checkTokenController(req: Request, res: Response) {
  const { token } = req.cookies;
  if (!token) {
    return res.status(400).json({ message: 'No token provided' });
  }

  let tokenUser;
  let user;
  let error;
  try {
    tokenUser = validateJwtToken(token);
    if (!tokenUser) {
      throw new Error();
    }

    user = UserModel.findByPk(tokenUser?.id);
    if (!user) {
      throw new Error();
    }
  } catch (err) {
    res.cookie('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      expires: new Date(0),
      path: '/',
    });
    error = { error: 'Invalid token or user does not exist' };
  }

  res.status(200).json(user || error);
}
