
const { MongoClient, ServerApiVersion } = require('mongodb');

let uri = process.env.DB_URI ? process.env.DB_URI : '';

if (!uri) {
  throw new Error('Failed to connect to MongoDB!')
}

uri = uri
  .replace('<user>', process.env.DB_USER)
  .replace('<pass>', process.env.DB_PASS)

exports.mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });