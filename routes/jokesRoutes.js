const express = require("express");
const router = express.Router();
const controller = require("../Controllers/jokeController");

router.post("/", controller.addJoke);
router.get("/", controller.getAllJokes);
router.get("/:id", controller.getJokeById);
router.get("/random", controller.getRandomJoke);
router.get("/categorie/:nom", controller.getJokesByCategorie);

module.exports = router;
