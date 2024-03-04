async function buscarTimePeloOwner(teams, user) {
  const timeEncontrado = teams.filter((item) => item[0].owner == user);

  return timeEncontrado[0];
}

module.exports = buscarTimePeloOwner;
