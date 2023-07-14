import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { UserLogin } from '../interfaces/User';

export const createJwtToken = ({ password, ...rest }: UserLogin): string => {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) throw new Error('JWT_SECRET not found');

  const token = jwt.sign({ rest }, jwtSecret, {
    expiresIn: '15d',
    algorithm: 'HS256',
  });

  return token;
};

export const validateJwtToken = (token: string) => {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) throw new Error('JWT_SECRET not found');

  const response = jwt.verify(token, jwtSecret);

  return response;
};
