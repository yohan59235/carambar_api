const { Joke } = require("../models");
const { Op } = require("sequelize");

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

exports.getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findByPk(req.params.id);
    if (!joke) return res.status(404).json({ error: "Blague non trouvée" });
    res.json(joke);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération de la blague" });
  }
};

exports.getRandomJoke = async (req, res) => {
  try {
    const count = await Joke.count();
    if (count === 0) {
      return res
        .status(404)
        .json({ error: "Aucune blague trouvée dans la base de données" });
    }
    const randomIndex = Math.floor(Math.random() * count);
    const randomId = parseInt(randomIndex, 10) + 1;
    const joke = await Joke.findOne({
      where: { id: randomId },
    });
    if (!joke) {
      return res
        .status(500)
        .json({ error: "Erreur interne : Blague aléatoire non trouvée" });
    }
    res.json(joke);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération de la blague aléatoire" });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Joke.findAll({
      attributes: ["categorie"],
      group: ["categorie"],
      raw: true,
    });
    const categoryNames = categories.map((c) => c.categorie);
    res.status(200).json(categoryNames);
  } catch (err) {
    console.error("Erreur sequelize", err)
    res.status(500).json({ error: "Il n'y a pas de catégories de blagues" });
  }
};

exports.getJokesByCategorie = async (req, res) => {
  try {
    const { nom } = req.params;
    const jokes = await Joke.findAll({ where: { categorie: nom } });

    if (jokes.length === 0) {
      return res
        .status(404)
        .json({ message: "Aucune blague trouvée dans cette catégorie" });
    }
    res.json(jokes);
  } catch (err) {
    res.status(500).json({ error: "Erreur du filtrage par catégorie" });
  }
};
