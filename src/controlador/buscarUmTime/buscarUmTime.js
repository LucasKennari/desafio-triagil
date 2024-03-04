const { teams } = require("../../bancoDeDados/dbNaMemória/bancodedados");
const buscarTimePeloOwner = require("../../bancoDeDados/functionQuerys/buscarTimePeloOwner");

const buscarUmTime = async (req, res) => {
  const { user } = req.params;
  try {
    const timeEncontrado = await buscarTimePeloOwner(teams, user);

    if (!timeEncontrado[0]) {
      return res
        .status(400)
        .json({ mensagem: "Nenhum time encontrado com esse user" });
    }
    return res.status(200).json(timeEncontrado);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ Error: "Erro interno do servidor" });
  }
};

module.exports = buscarUmTime;
