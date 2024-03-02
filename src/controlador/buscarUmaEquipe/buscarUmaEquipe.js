const teams = require("../../bancoDeDados/dbNaMemória");

buscarUmaEquipe = async (req, res) => {
  const { user } = req.params;
  try {
    const equipeEncontrada = teams.filter((equipe) => equipe.user === user);
    if (!equipeEncontrada) {
      return res.status(400).json({ mensagem: "Nenhuma Equipe encontrada" });
    }
    return res.status(200).json(equipeEncontrada);
  } catch (e) {}
};
module.exports = buscarUmaEquipe;
