const express = require("express");
const mongoose = require("mongoose");
const port = process.env.port || 4000;
//const MongoClient = require('mongodb').MongoClient;

//creating a server
const app = express();

//connecting to db


async function myConnection() {
  const uri = 'mongodb+srv://admin:e5gU3YvVzyBQR3Z@cluster0.k6rzq.mongodb.net/konichiwaDb?retryWrites=true&w=majority';

  await mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
}

myConnection();


//routes
app.get("/",(req,res) =>{
  res.status(200).send('its working bitches');
})

//listening...
app.listen(port,()=>{
  console.log(`listening to port ${port}`);
})
