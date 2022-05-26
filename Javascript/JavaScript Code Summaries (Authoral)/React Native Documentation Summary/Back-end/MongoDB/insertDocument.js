import { MongoClient } from "mongodb";

function mongoURI(mongoAdminPassword, databaseName) {
    return "mongodb+srv://admin:" + mongoAdminPassword + "@mood-tracker-cluster.f0b5r.mongodb.net/" + databaseName + "?retryWrites=true&w=majority";
}

const databaseName = 'MoodTrackerDatabase'
const mongoAdminPassword = 'admin'
//const collectionName = 'EntriesCollection'
const uri = mongoURI(mongoAdminPassword, databaseName)

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db("insertDB");
    const haiku = database.collection("haiku");
    // create a document to insert
    const doc = {
      title: "Record of a Shriveled Datum",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    }
    const result = await haiku.insertOne(doc);

    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
