const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
var bodyParser = require('body-parser');
const dotenv = require('dotenv');
const Channel = require("./routes/channel");


const port = process.env.port || 4000;


//creating a server
const app = express();


//connecting to db


// async function myConnection() {
//   const uri = 'mongodb+srv://admin:e5gU3YvVzyBQR3Z@cluster0.k6rzq.mongodb.net/konichiwaDb?retryWrites=true&w=majority';
//
//   await mongoose.connect('mongodb://localhost/my_database', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
//   });
// }
//
// myConnection();
mongoose.connect('mongodb://localhost/konichiwaDb' ,{
   useNewUrlParser: true,
   useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

//middleware
app.use(express.json());
app.use(cors());
require('dotenv').config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.get("/",(req,res) =>{
  res.status(200).send('its working bitches');
})

app.use("/channel" , Channel);

//error handling middleware
app.use((err,req,res,next) =>{
  res.status(422).json({
    "error": err.message
  })
});


//listening...
app.listen(port,()=>{
  console.log(`listening to port ${port}`);
})
