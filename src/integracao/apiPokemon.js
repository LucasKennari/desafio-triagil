const errorMsg = require("../utils/conttroleDeError/controleDeError");

async function getPokemon(pokemons) {
  let error;
  let dados;

  error = null;
  const requisicao = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemons}`
  );
  if (requisicao.status === 404) {
    throw new Error(errorMsg[404].msgPokemonNaoEncontrado.Mensagem);
  } else if (!requisicao.ok) {
    throw new Error(errorMsg[500]);
  }

  dados = await requisicao.json();

  return dados;
}
module.exports = getPokemon;
