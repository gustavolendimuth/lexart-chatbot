import express from 'express';
import { createUserController } from '../controllers/userController';

const userRouter = express.Router();

userRouter.post('/', createUserController);

export default userRouter;
