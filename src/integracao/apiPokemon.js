async function getPokemon(pokemons) {
  let error;
  let dados;

  error = null;
  const requisicao = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemons}`
  );
  if (requisicao.status === 404) {
    throw new Error("Pokemon não Encontrado");
  } else if (!requisicao.ok) {
    throw new Error("Erro interno do servidor");
  }

  dados = await requisicao.json();

  return dados;
}
module.exports = getPokemon;
