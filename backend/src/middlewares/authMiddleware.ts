/* eslint-disable max-lines-per-function */
import { NextFunction, Response } from 'express';
import { RequestWithUser } from '../types/userTypes';
import HttpException from '../utils/HttpException';
import { validateJwtToken } from '../utils/jwtUtils';

export default function authMiddleware(req: RequestWithUser, res: Response, next: NextFunction) {
  const { token } = req.cookies;
  if (!token) {
    throw new HttpException(401, 'You have to login to access this route');
  }

  let user;
  try {
    user = validateJwtToken(token);
  } catch (error) {
    console.error(error);
    res.cookie('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      expires: new Date(0),
      path: '/',
    });
    return res.status(200).json({
      content: 'You have been logged out. Please login again to see the options.', error,
    });
  }
  req.user = user;

  next();
}
