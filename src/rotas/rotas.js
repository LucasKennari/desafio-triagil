const teams = require("../bancoDeDados/dbNaMemória/bancodedados");

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
  //   const pokemon = obj.map(({ id, name, weight, height }) => {
  //     id, name, weight, height;
  //   });

  res.json(pokemonPerfil);
});

rotas.get("/api/teams", (req, res) => {
  res.json(teams);
});
rotas.get("/api/teams/:user", () => {});

rotas.post("/api/teams", async (req, res) => {
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

  teams.push([
    {
      idTeam: 1,
      user: owner,
      team: perfilPokemon,
    },
  ]);

  const team = teams.filter((item) => item[0].user === owner);
  res.json(team);
});
module.exports = rotas;
