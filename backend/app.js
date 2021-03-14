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
