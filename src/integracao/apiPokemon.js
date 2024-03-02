async function getPokemon(pokemons) {
  let error;
  let dados;
  try {
    error = null;
    const requisicao = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemons}`
    );
    dados = await requisicao.json();
  } catch (error) {
    throw new Error("Pokemon não Encontrado");
  }
  return dados;
}
module.exports = getPokemon;
