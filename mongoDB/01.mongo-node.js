// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/mydb"; // Replace with your connection string

// const databaseName = "e-comm";
// const client = new MongoClient(url);

// async function getData() {
//   let result = await client.connect();
//   db = await result.db(databaseName);
//   collection = db.collection("products");
//   let data = await collection.find({}).toArray();
//   console.log(data);
// }

// getData();


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/e-comm',{useNewUrlParser:true});
const db = mongoose.connection;
db.on('err',()=>{
    console.log("err");
});
db.once('open',()=>{
    console.log("connected");
})