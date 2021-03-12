const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const konichiwaSchema = new Schema({
  channelName: String,

  conversation: [
    {
      message: String,
      timestamp: String,
      user:{
        displayName:String,
        email:String,
        photo:String,
        uid:String
      }
    }
  ]
});

const konichiwa =  mongoose.model('channels', konichiwaSchema);//konichiwa == modelName && channels == collectionName
module.exports = konichiwa;
