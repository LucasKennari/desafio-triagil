const { teams } = require("../../bancoDeDados/dbNaMemória/bancodedados");
const buscarTimePeloOwner = require("../../bancoDeDados/functionQuerys/buscarTimePeloOwner");
const errorMsg = require("../../utils/conttroleDeError/controleDeError");

const buscarUmTime = async (req, res) => {
  const { user } = req.params;
  try {
    const timeEncontrado = await buscarTimePeloOwner(teams, user);

    if (!timeEncontrado) {
      return res
        .status(404)
        .json(errorMsg[404].msgUserNaoEncontrado);
    }
    return res.status(200).json(timeEncontrado);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(errorMsg[500]);
  }
};

module.exports = buscarUmTime;
