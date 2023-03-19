require('dotenv').config();

import express, { Express, Request, Response } from 'express';
import cors from 'cors';
// import helmet from 'helmet'; // TS throws error 1479 here

const app: Express = express();
const isDev: boolean = process.env.NODE_ENV as string === 'dev';
const port: number = isDev ? Number(process.env.PORT as string) : 5000;
const { mongoConnect } = require('./mongodb');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(helmet());
app.use(cors())

mongoConnect().catch(console.dir);

app.get('/', (_req: Request, res: Response) => {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(process.env.PORT, function () {
  console.log(`CORS-enabled web "${process.env.NODE_ENV}" server listening on port ${port}`)
})
