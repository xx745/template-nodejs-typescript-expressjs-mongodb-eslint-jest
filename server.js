require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require("helmet");
const app = express();
const isDev = process.env.NODE_ENV === 'dev';
const port = isDev ? process.env.PORT : 5000;
const { mongoConnect } = require('./mongodb');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors())

mongoConnect().catch(console.dir);

app.get('/', (req, res, next) => {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(process.env.PORT, function () {
  console.log(`CORS-enabled web "${process.env.NODE_ENV}" server listening on port ${port}`)
})
