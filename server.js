require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require("helmet");
const app = express();
const isDev = process.env.NODE_ENV === 'dev';
const port = isDev ? process.env.PORT : 5000;
const { mongoClient } = require('./mongodb');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors())


try {
  mongoClient.connect(err => {
    const userDetailsCollection = mongoClient.db("users").collection("details");
    // perform actions on the collection object
    console.log(userDetailsCollection);
    mongoClient.close();
  });
} catch (err) {
  console.log(err)
}


app.get('/', (req, res, next) => {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(process.env.PORT, function () {
  console.log(`CORS-enabled web "${process.env.NODE_ENV}" server listening on port ${port}`)
})
