const { Joke } = require("../models");

exports.addJoke = async (req, res) => {
  try {
    const { question, reponse } = req.body;
    const joke = await Joke.create({ categorie, question, reponse });
    res.status(201).json(joke);
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de l ajout" });
  }
};
