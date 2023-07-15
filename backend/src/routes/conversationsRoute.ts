import express from 'express';
import {
  createConversationController, getConversationController, getConversationsController,
} from '../controllers/conversationsController';

const conversationsRouter = express.Router();

conversationsRouter.post('/', createConversationController);
conversationsRouter.get('/', getConversationsController);
conversationsRouter.get('/:id', getConversationController);

export default conversationsRouter;
