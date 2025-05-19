const express = require("express");
const router = express.Router();
const controller = require("../Controllers/jokeController");

router.get("/random", controller.getRandomJoke);
router.post("/", controller.addJoke);
router.get("/", controller.getAllJokes);
router.get("/categorie", controller.getAllCategories);
router.get("/categorie/:nom", controller.getJokesByCategorie);
router.get("/:id", controller.getJokeById);

module.exports = router;
