/* eslint-disable import/prefer-default-export */
import bcrypt from 'bcrypt';
import UserModel from '../database/models/UserModel';
import { CreateUserRequest } from '../types/userTypes';
import HttpException from '../utils/HttpException';
import { createJwtToken } from '../utils/jwtUtils';

export async function createUserService(createUserRequest: CreateUserRequest) {
  const { email, password, ...rest } = createUserRequest;
  const saltOrRounds = 10;

  if (!email || !password) {
    throw new HttpException(400, 'Invalid email or password');
  }

  const userExists = await UserModel.findOne({
    where: { email },
  });

  if (userExists) {
    throw new HttpException(400, 'User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, saltOrRounds);

  const {
    password: _, ...userWithoutPassword
  } = (await UserModel.create({ email, password: hashedPassword, ...rest })).get();

  const token = createJwtToken(userWithoutPassword);
  return token;
}
