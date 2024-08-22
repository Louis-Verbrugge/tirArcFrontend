// const { MongoClient } = require("mongodb");
// const username = encodeURIComponent("louvbg");
// const password = encodeURIComponent("<password>");
// const cluster = "<clusterName>";
// const authSource = "<authSource>";
// const authMechanism = "<authMechanism>";

// let uri =
//   `mongodb+srv://louvbg:OhC2ipMSxJU1Mo4J@cluster0.z0dughd.mongodb.net/`;

// const client = new MongoClient(uri);

// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log("Connected correctly to server");
//     const database = client.db("databaseUsers");
//     const ratings = database.collection("sales");
//     const cursor = ratings.find();
//     await cursor.forEach(doc => console.dir(doc.name));
//   } finally {
//     await client.close();
//   }

// }
// connectToDatabase().catch(console.dir);