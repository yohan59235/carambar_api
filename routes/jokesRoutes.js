const express = require("express");
const router = express.Router();
const controller = require("../Controllers/jokeController");

router.post("/", controller.addJoke);
router.get("/blague", controller.getAllJokes);
router.get("/blague/:id", controller.getJokeById);

module.exports = router;
