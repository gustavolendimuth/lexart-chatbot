import cookieParser from 'cookie-parser';
import cors, { CorsOptions } from 'cors';
import express from 'express';
import 'express-async-errors';

import { errorMiddleware } from './middlewares/errorMiddleware';
import router from './routes/routes';

const corsOptions: CorsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3001',
  credentials: true,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use(router);

app.use(errorMiddleware);

export default app;
