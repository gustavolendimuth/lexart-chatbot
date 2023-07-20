import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import UserModel from '../database/models/UserModel';

export type UserLogin = Omit<UserModel, 'name' | 'id'>;

export type CreateUserRequest = Omit<UserModel, 'id' | 'role'>;

export interface LoggedUser extends JwtPayload {
  id: number;
  name: string;
  email: string;
}

export interface RequestWithUser extends Request {
  user?: LoggedUser
}
