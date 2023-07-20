import express from 'express';
import { loggedInMessagesController, loggedOutMessagesController } from '../controllers/messagesController';
import authMiddleware from '../middlewares/authMiddleware';

const messagesRouter = express.Router();

messagesRouter.post('/logged-out', loggedOutMessagesController);
messagesRouter.post('/logged-in', authMiddleware, loggedInMessagesController);

export default messagesRouter;
