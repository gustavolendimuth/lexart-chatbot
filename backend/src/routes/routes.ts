import express, { Request, Response } from 'express';
import chatRouter from './chatRoute';
import logRouter from './logRoute';
import messagesRouter from './messagesRoute';
import userRouter from './userRoute';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => res.send('Lexart Chatbot'));

router.use('/log', logRouter);
router.use('/user', userRouter);
router.use('/messages', messagesRouter);

// router.use(authMiddleware);
router.use('/chat', chatRouter);

export default router;
