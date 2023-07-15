/* eslint-disable import/prefer-default-export */
import bcrypt from 'bcrypt';
import UserModel from '../database/models/UserModel';
import HttpException from '../utils/HttpException';
import { createJwtToken } from '../utils/jwtUtils';

export async function loginService(
  { email, password }: { email: string, password: string },
): Promise<{ token: string }> {
  if (!email || !password) {
    throw new HttpException(400, 'All fields must be filled');
  }

  const user = await UserModel.findOne({ where: { email } });

  const userError = new HttpException(401, 'Incorrect email or password');
  if (!user) {
    throw userError;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw userError;
  }

  const { password: _, ...userWithoutPassword } = user.get();

  const token = createJwtToken(userWithoutPassword);
  return token;
}
