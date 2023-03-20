import { app } from './server';
import { mongoConnect } from './mongodb';

const isDev: boolean = process.env.NODE_ENV as string === 'dev';
const port: number = isDev ? Number(process.env.PORT as string) : 5000;

mongoConnect().catch(console.dir);

app.listen(process.env.PORT, function () {
  console.log(`CORS-enabled web "${process.env.NODE_ENV}" server listening on port ${port}`);
});
