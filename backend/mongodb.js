import { MongoClient } from "mongodb";
import express from "express";
import cors from "cors";
const app = express();

const allowedOrigins = ['http://localhost:3000', 'https://yourfrontenddomain.com'];
app.use(cors({
  origin: allowedOrigins,
}));
// const port = 3000;

// app.listen(port, () => {
//     console.log("server runnig");
// })

const uri = "mongodb+srv://melissacheng15:melissacheng15@donate4good.hkncjwe.mongodb.net/?retryWrites=true&w=majority&appName=Donate4Good";
// const uri ="mongodb://localhost:27017";

// Create a MongoClient with TLS/SSL option
const client = new MongoClient(uri, {
  tls: true, // Enable TLS/SSL encryption
});

// Connect to MongoDB and perform operations
const insert = async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB!");

    const database = client.db('Donate4Good');

    // Define a collection
    const collection = database.collection('organization');

    // Insert documents
    const result = await collection.insertMany([
      { name: 'Chldren', funds: 30, food: true, clothing: true, stationeries: true },
      { name: 'Eldrlies', funds: 40, food: true, clothing: false, stationeries: false  },
    ]);

    console.log(`${result.insertedCount} documents inserted.`);



    // Perform database operations here...

  } finally {
    // Close the connection when finished
    await client.close();
  }
}

// Call the run function
run().catch(console.dir);
// export { client };

// const getCount = () => {
//     return client.db("Donate4Good").collection("organization").countDocuments();
// }

const getCount = async () => {
    try {
      await client.connect();
      const count = await client.db("Donate4Good").collection("organization").countDocuments();
      return count;
    } catch (error) {
      console.error('Error getting count:', error);
      throw error;
    } finally {
      await client.close();
    }
  };
  
  export { client, getCount };