const express = require("express");
var router = express.Router();
const {createChannel} = require( "../controllers/channel");

router.post("/createChannel",createChannel);

module.exports = router;
