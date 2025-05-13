const express = require("express");
const router = express.Router();
const controller = require("../Controllers/jokeController");

router.post("/", controller.addJoke);

module.exports = router;
