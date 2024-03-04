teams = [];

function incrementadorId(teams) {
  let incrementadorId = 1;
  incrementadorId += teams.length;
  return incrementadorId;
}
module.exports = { teams, incrementadorId };
