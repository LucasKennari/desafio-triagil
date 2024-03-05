const { teams } = require("../../bancoDeDados/dbNaMemória/bancodedados");
const errorMsg = require("../../utils/conttroleDeError/controleDeError");
const listarTodosOsTimes = async (req, res) => {
  try {
    if (!teams[0]) {
      return res.status(404).json(errorMsg[404].msgTimeNaoEncontrado);
    }
    return res.status(200).json({ teams });
  } catch (e) {
    return res.status(500).json(errorMsg[500]);
  }
};
module.exports = listarTodosOsTimes;

