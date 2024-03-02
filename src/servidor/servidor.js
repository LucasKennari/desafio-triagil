const rotas = require("../rotas/rotas");

const express = require("express");
const servidor = express();

const port = 3000;

servidor.use(express.json());
servidor.use(rotas);

module.exports = { servidor, port };
