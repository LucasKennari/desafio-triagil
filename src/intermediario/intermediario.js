const verificarPokemonsNoBody = require("../utils/verificarPokemonsNoBody");

const intermediario = async (req, res, next) => {
  const { user, pokemons } = req.body;

  try {
    if (!user || !user.trim()) {
      return res
        .status(404)
        .json({ Mensagem: "Por favor insira um nome na propriedade owner" });
    }
    if (pokemons.includes([])) {
      return res.status(404).json({ Mensagem: "Por favor insira coloque []" });
    }

    const pokemon = await verificarPokemonsNoBody(pokemons);

    if (!pokemon) {
      return res
        .status(404)
        .json({ Mensagem: "Está faltando um pokemon no array" });
    }

    next();
  } catch (error) {
    return res.status(500).json({ Error: "Error interno do servidor." });
  }
};

module.exports = intermediario;
