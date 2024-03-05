const {
  teams,
  incrementadorId,
} = require("../../bancoDeDados/dbNaMemória/bancodedados");
const buscarTimePeloOwner = require("../../bancoDeDados/functionQuerys/buscarTimePeloOwner");
const getPokemon = require("../../integracao/apiPokemon");
const errorMsg = require("../../utils/conttroleDeError/controleDeError");

const criarUmTime = async (req, res) => {
  const { user, pokemons } = req.body;

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
        .json(errorMsg[400].msgErrorAoAddPokemon);
    }

    teams.push({
      id: incrementadorId(teams),
      owner: user,
      pokemons: perfilPokemon,
    });

    const timeEncontrado = await buscarTimePeloOwner(teams, user);

    res.status(201).json({ id: timeEncontrado.id });
  } catch (error) {
    return res.status(404).json({Mensagem: error.message} );
  }
};

module.exports = criarUmTime;
