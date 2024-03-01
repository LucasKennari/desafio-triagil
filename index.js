const express = require("express");
const app = express();
const port = 3000;

const route = require("express")();

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

app.get("/api/teams/:user", () => {});

app.use(express.json());
app.use(route);

app.listen(port, () => {
  console.log("Servidor on!!");
});
