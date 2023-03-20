import { MongoClient, ServerApiVersion } from 'mongodb';

let uri: string = process.env.DB_URI ? process.env.DB_URI : '';

if (!uri) {
  throw new Error('Failed to connect to MongoDB - missing URI!');
}

uri = uri
  .replace('<user>', encodeURIComponent(process.env.DB_USER as string))
  .replace('<pass>', encodeURIComponent(process.env.DB_PASS as string))
  .replace('<cluster>', process.env.DB_CLUSTER as string);

const client: MongoClient = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });

export async function mongoConnect(): Promise<void> {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db('gt').command({ ping: 1 });
    console.log('Pinged your deployment. You are successfully connected to MongoDB!');
  } catch (err) {
    console.error(err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
