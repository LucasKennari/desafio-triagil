const teams = require("../../bancoDeDados/dbNaMemória/bancodedados");
const getPokemon = require("../../integracao/apiPokemon");

const criarEquipe = async (req, res) => {
  const { owner, pokemons } = req.body;
  try {
    const resultado = pokemons.map(async (pokemons) => {
      const dados = await getPokemon(pokemons);

      let perfilPokemon = {
        id: dados.id,
        name: dados.name,
        weight: dados.weight,
        height: dados.height,
      };
      return perfilPokemon;
    });

    let perfilPokemon = await Promise.all(resultado);

    if (!perfilPokemon) {
      return res
        .status(400)
        .json({ mensagem: "Não foi possível adicionar o perfil do pokemon" });
    }

    teams.push([
      {
        idTeam: 1,
        user: owner,
        team: perfilPokemon,
      },
    ]);

    const team = teams.filter((item) => item[0].user === owner);

    res.status(201).json(team);
  } catch (error) {
    return res.status(404).json({ mensagem: error.message });
  }
};

module.exports = criarEquipe;
