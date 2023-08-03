import express from 'express';
import {
  createChatController,
  getChatsController,
} from '../controllers/chatController';

const chatRouter = express.Router();

chatRouter.post('/', createChatController);
chatRouter.get('/', getChatsController);
chatRouter.get('/:id', getChatsController);

export default chatRouter;
