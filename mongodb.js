
const { MongoClient, ServerApiVersion } = require('mongodb');

let uri = process.env.DB_URI ? process.env.DB_URI : '';

if (!uri) {
  throw new Error('Failed to connect to MongoDB!')
}

uri = uri
  .replace('<user>', encodeURIComponent(process.env.DB_USER))
  .replace('<pass>', encodeURIComponent(process.env.DB_PASS));

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  
async function mongoConnect() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("gt").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

exports.mongoConnect = mongoConnect