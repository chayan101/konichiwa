const konichiwa = require("../models/konichiwa");

exports.createChannel = (req,res, next) => {
  konichiwa.create(req.body).then((channel)=>{//.then() takes the channel saved successfully as arg
    console.log("channel successfully into the database");
    res.send(channel);
  }).catch(next);
};
 
