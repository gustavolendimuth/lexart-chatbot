import express, { Request, Response } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import conversationsRouter from './conversationsRoute';
import loginRouter from './loginRoute';
import userRouter from './userRoute';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => res.send('Lexart Chatbot'));

router.use('/login', loginRouter);
router.use('/user', userRouter);

router.use(authMiddleware);
router.use('/conversations', conversationsRouter);

export default router;
