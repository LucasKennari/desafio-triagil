const verificarPokemonsNoBody = require("../utils/verificarPokemonsNoBody");

const intermediario = async (req, res, next) => {
  const { user, pokemons } = req.body;

  try {
    if (!user || !user.trim()) {
      return res
        .status(404)
        .json({ Mensagem: "Verifique se todos os campos foram preenchidos" });
    }
    if (pokemons.includes([])) {
      return res
        .status(404)
        .json({ Mensagem: "Por favor insira os pokemons dentro de: []" });
    }

    const pokemon = await verificarPokemonsNoBody(pokemons);

    if (!pokemon) {
      return res
        .status(404)
        .json({ Mensagem: "Verifique se todos os campos foram preenchidos" });
    }

    next();
  } catch (error) {
    return res.status(500).json({ Error: "Error interno do servidor." });
  }
};

module.exports = intermediario;
