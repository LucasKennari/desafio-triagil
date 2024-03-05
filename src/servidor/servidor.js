const rotas = require("../rotas/rotas");
const swaggerUi = require("swagger-ui-express");

const swaggerDocs = require("../swagger/swagger.json");

const express = require("express");

const { errorMsg } = require("../utils/conttroleDeError/controleDeError");
const servidor = express();

const port = 3000;
servidor.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

servidor.use(express.json());
servidor.use(rotas);
module.exports = { servidor, port };
