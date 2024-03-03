const teams = require("../../bancoDeDados/dbNaMemória/bancodedados");
const listarTodasAsEquipes = async (req, res) => {
  try {
    if (!teams[0]) {
      return res.status(404).json({ mensagem: "Nenhuma equipe encontrada." });
    }
    return res.status(200).json({ teams });
  } catch (e) {
    return res.status(500).json({ Error: "Erro interno do servidor" });
  }
};
module.exports = listarTodasAsEquipes;
