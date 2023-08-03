import express from 'express';
import { checkTokenController, loginController, logoutController } from '../controllers/logController';

const logRouter = express.Router();

logRouter.post('/in', loginController);
logRouter.post('/out', logoutController);
logRouter.post('/check', checkTokenController);

export default logRouter;
