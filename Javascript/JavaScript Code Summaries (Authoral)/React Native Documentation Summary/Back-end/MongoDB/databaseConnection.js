
const { MongoClient } = require('mongodb');

function mongoURI(mongoAdminPassword, databaseName) {
    return "mongodb+srv://admin:" + mongoAdminPassword + "@mood-tracker-cluster.f0b5r.mongodb.net/" + databaseName + "?retryWrites=true&w=majority";
}

const databaseName = 'MoodTrackerDatabase'
const mongoAdminPassword = 'admin'
const uri = mongoURI(mongoAdminPassword, databaseName)

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {

    const collection = client.db("MoodTrackerDatabase").collection("EntriesCollection");
    console.log('Connected Successfully to Database!')

    console.log(collection.find({}))
    // perform actions on the collection object

    client.close();

});
