const express = require("express");
const cors = require("cors");
const jokeRoutes = require("./routes/jokesRoutes");
const { initDb } = require("./models");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument = YAML.load('./swagger/swagger.yaml');

const app = express();

app.use(cors());
app.use(express.json());
app.use("/blagues", jokeRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

initDb();

module.exports = app;
