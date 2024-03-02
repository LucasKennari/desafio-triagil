const teams = require("../../bancoDeDados/dbNaMemória/bancodedados");
const listarTodasAsEquipes = async (req, res) => {
  try {
    if (!teams) {
      return res.status(400).json({ mensagem: "Nenhuma equipe encontrada." });
    }
    return res.status(200).json({ teams });
  } catch (e) {
    return res.status(500).json({ Error: "Erro interno do servidor" });
  }
};
module.exports = listarTodasAsEquipes;
