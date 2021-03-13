const Konichiwa = require("../models/konichiwa");

exports.createChannel = (req,res, next) => {
  Konichiwa.create(req.body).then((channel)=>{//.then() takes the channel saved successfully as arg
    console.log("channel successfully into the database");
    res.send(channel);
  }).catch(next);
};



exports.listofChannels = (req,res, next) => {
  Konichiwa.find({}).then((channelArray) => {
    const channels = [];
    channelArray.map((channel)=>{
      const  channelInfo = {
        channelName: channel.channelName,
        channelId: channel._id
      };
      channels.push(channelInfo);
    });
    res.send(channels);
  }).catch(next);
};

exports.newMessage = (req, res, next) =>{
  // Konichiwa.findByIdAndUpdate({_id: req.params.id}, req.body).then(()=>{
  //   Konichiwa.findOne({_id:req.params.id}).then((channel)=>{
  //     res.send(channel);
  //   });
  // }).catch(next);
  Konichiwa.findByIdAndUpdate( req.params.id, {$push: {conversation: req.body}}).then((channel) => {
    //res.send(channel.channelName);


    res.send(channel);
  }).catch(next);
};

exports.conversations = (req, res, next)=>{
  Konichiwa.findById(req.params.id).then((channel)=>{
    res.send(channel);
  }).catch(next);
};
