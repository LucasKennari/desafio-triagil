const teams = require("../../bancoDeDados/dbNaMemória/bancodedados");

const buscarUmaEquipe = async (req, res) => {
  const { user } = req.params;
  try {
    const equipeEncontrada = teams.filter((item) => item[0].owner == user);

    if (!equipeEncontrada[0]) {
      return res
        .status(400)
        .json({ mensagem: "Nenhuma equipe encontrada com esse nome" });
    }
    return res.status(200).json(equipeEncontrada);
  } catch (error) {
    res.status(500).json({ Error: "Erro interno do servidor" });
  }
};

module.exports = buscarUmaEquipe;
