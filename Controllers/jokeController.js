const { Joke } = require("../models");

exports.addJoke = async (req, res) => {
  try {
    const { categorie, question, reponse } = req.body;
    const joke = await Joke.create({ categorie, question, reponse });
    res.status(201).json(joke);
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de l ajout" });
  }
};

exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.json(jokes);
  } catch (err) {
    res.status(500).json({ error: "Erreur de la récupération des blagues" });
  }
};
