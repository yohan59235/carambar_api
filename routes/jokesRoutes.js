const express = require("express");
const router = express.Router();
const controller = require("../Controllers/jokeController");

router.post("/", controller.addJoke);
router.get("/", controller.getAllJokes);

module.exports = router;
