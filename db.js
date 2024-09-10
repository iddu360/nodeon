const { MongoClient } = require("mongodb");

let dbConnection;
let uri =
  "mongodb+srv://codecypher:h4b4QTG7yJWO4IVc@cluster0.kukigkc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
module.exports = {
  connectToDb: (cb) => {
    // MongoClient.connect("mongodb://localhost:27017/bookstore")
    MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db();
        console.log("Connected to MongoDB");
        cb(null); // Call the callback without an error
      })
      .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
        cb(err); // Call the callback with the error
      });
  },
  getDb: () => dbConnection,
};
