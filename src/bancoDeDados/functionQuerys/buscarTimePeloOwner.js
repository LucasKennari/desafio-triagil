async function buscarTimePeloOwner(teams, user, perfil) {
  const timeEncontrado = teams.filter(
    (item) => item.owner == user && item.id === perfil.id
  );

  return timeEncontrado[0];
}

module.exports = buscarTimePeloOwner;
