const express = require("express");
var router = express.Router();
const {createChannel , listofChannels, newMessage, conversations} = require( "../controllers/channel");

router.post("/createChannel",createChannel);

router.get("/list" , listofChannels);

router.post("/:id/newMessage", newMessage);

router.get("/:id/conversations" , conversations);

module.exports = router;
