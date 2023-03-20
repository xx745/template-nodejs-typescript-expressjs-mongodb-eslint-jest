import { config } from 'dotenv';

config();

import express, { Express, Request, Response } from 'express';
import cors from 'cors';
// import helmet from 'helmet'; // wrong types https://github.com/helmetjs/helmet/pull/405

export const app: Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(helmet());
app.use(cors());

app.get('/', (_req: Request, res: Response) => {
  res.json({msg: 'This is CORS-enabled for all origins!'});
});
