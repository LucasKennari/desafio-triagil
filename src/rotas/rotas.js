const criarUmTime = require("../controlador/criarUmTime/criarUmTime");
const buscarUmTime = require("../controlador/buscarUmTime/buscarUmTime");
const listarTodosOsTimes = require("../controlador/listarTodosOsTimes/listarTodosOsTimes");

const paginaNaoEncontrada = require("../controlador/paginaNaoEncontrada/paginaNaoEncontrada");

const intermediario = require("../intermediario/intermediario");

const rotas = require("express")();

rotas.get("/api/teams", listarTodosOsTimes);
rotas.get("/api/teams/:user", buscarUmTime);
rotas.get("/api/*", paginaNaoEncontrada);

rotas.post("/api/teams", intermediario, criarUmTime);
module.exports = rotas;
