const teams = require("../bancoDeDados/dbNaMemória/bancodedados");
const criarEquipe = require("../controlador/criarEquipe/criarEquipe");
const listarTodasAsEquipes = require("../controlador/listarTodasAsEquipes/listarTodasAsEquipes");
const intermediario = require("../intermediario/intermediario");

const rotas = require("express")();

rotas.get("/:pokemon", async (req, res) => {
  const { pokemon } = req.params;
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const obj = await data.json();

  const { id, name, weight, height, ...resto } = obj;
  const pokemonPerfil = {
    id,
    name,
    weight,
    height,
  };

  res.json(pokemonPerfil);
});

rotas.get("/api/teams", listarTodasAsEquipes);
rotas.get("/api/teams/:user", () => {});

rotas.post("/api/teams", intermediario, criarEquipe);
module.exports = rotas;
