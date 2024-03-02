const express = require("express");
const team = require("./src/database/dbNaMemória/bancodedados");
const app = express();
const port = 3000;

const route = require("express")();

app.use(express.json());
app.use(route);

app.get("/:pokemon", async (req, res) => {
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
  //   const pokemon = obj.map(({ id, name, weight, height }) => {
  //     id, name, weight, height;
  //   });

  res.json(pokemonPerfil);
});

app.get("/api/teams", () => {});
app.get("/api/teams/:user", () => {});

app.post("/api/teams", async (req, res) => {
  const { owner, pokemons } = req.body;

  const resultado = pokemons.map(async (pokemon) => {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await request.json();
    let perfilPokemon = {
      id: data.id,
      name: data.name,
      weight: data.weight,
      height: data.height,
    };
    return perfilPokemon;
  });

  let perfilPokemon = await Promise.all(resultado);

  team.push([
    {
      idTeam: 1,
      user: owner,
      team: perfilPokemon,
    },
  ]);

  res.json(team);
});

app.listen(port, () => {
  console.log("Servidor on!!");
});
