import 'dotenv/config';
import jwt from 'jsonwebtoken';
import UserModel from '../database/models/UserModel';
import { LoggedUser } from '../types/userTypes';

export function createJwtToken({ password, ...user }: UserModel) {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) throw new Error('JWT_SECRET not found');

  const token = jwt.sign(user, jwtSecret, {
    expiresIn: '15d',
    algorithm: 'HS256',
  });

  return { token };
}

export function validateJwtToken(token: string) {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) throw new Error('JWT_SECRET not found');

  const response = jwt.verify(token, jwtSecret) as LoggedUser;

  return typeof response === 'object' ? response : undefined;
}
