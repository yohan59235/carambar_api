const express = require("express");
const cors = require("cors");
const jokeRoutes = require("./routes/jokesRoutes");
const { initDb } = require("./models");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/blagues, jokeRoutes");

initDb();

module.exports = app;
