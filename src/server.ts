import { config } from 'dotenv';

config();

import express, { Express, Request, Response } from 'express';
import cors from 'cors';
// import helmet from 'helmet'; // wrong types https://github.com/helmetjs/helmet/pull/405

const app: Express = express();
const isDev: boolean = process.env.NODE_ENV as string === 'dev';
const port: number = isDev ? Number(process.env.PORT as string) : 5000;
import { mongoConnect } from './mongodb';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(helmet());
app.use(cors());

mongoConnect().catch(console.dir);

app.get('/', (_req: Request, res: Response) => {
  res.json({msg: 'This is CORS-enabled for all origins!'});
});

app.listen(process.env.PORT, function () {
  console.log(`CORS-enabled web "${process.env.NODE_ENV}" server listening on port ${port}`);
});
