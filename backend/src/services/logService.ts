/* eslint-disable import/prefer-default-export */
import bcrypt from 'bcrypt';
import UserModel from '../database/models/UserModel';
import HttpException from '../utils/HttpException';
import { createJwtToken, validateJwtToken } from '../utils/jwtUtils';

export async function loginService(
  { email, password }: { email: string, password: string },
): Promise<{ token: string, user: object | undefined }> {
  const userError = new HttpException(401, 'Incorrect email or password');

  if (!email || !password) {
    throw new HttpException(401, 'All fields must be filled');
  }

  const user = await UserModel.findOne({ where: { email } });

  if (!user) {
    throw userError;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw userError;
  }

  const { password: _, ...userWithoutPassword } = user.get();

  const token = createJwtToken(userWithoutPassword);
  return { token, user: userWithoutPassword };
}

export async function checkTokenService(token: string) {
  let tokenUser;
  let user;
  try {
    tokenUser = validateJwtToken(token);
  } catch (error) {
    throw new HttpException(401, 'Invalid token');
  }
  if (tokenUser) {
    user = await UserModel.findByPk(tokenUser.id);
    if (!user) {
      throw new HttpException(401, 'Invalid user');
    }
    const { password: _, ...userWithoutPassword } = user.get();
    return userWithoutPassword;
  }
}
