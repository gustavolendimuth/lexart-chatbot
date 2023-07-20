import { NextFunction, Response } from 'express';
import { RequestWithUser } from '../types/userTypes';
import HttpException from '../utils/HttpException';
import { validateJwtToken } from '../utils/jwtUtils';

const authMiddleware = (req: RequestWithUser, _res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new HttpException(401, 'Você precisa estar logado para acessar essa rota');
  }
  req.user = validateJwtToken(authorization);

  next();
};

export default authMiddleware;
