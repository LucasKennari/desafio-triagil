async function verificarPokemonsNoBody(pokemons) {
  const resultado = pokemons.every((pokemon) => pokemon && pokemon.trim());
  return resultado;
}

module.exports = verificarPokemonsNoBody;
