const errorMsg = require("../utils/conttroleDeError/controleDeError");
const verificarPokemonsNoBody = require("../utils/verificarPokemonsNoBody");

const intermediario = async (req, res, next) => {
  const { user, pokemons } = req.body;
  
  try {
    if (!user || !user.trim()) {
      return res
                .status(400).json(errorMsg[400].msgCampos)
    }
    if (pokemons.includes([])) {
      return res
        .status(400)
        .json(errorMsg[400].msgCampoIncorreto);
    }

    const pokemon = await verificarPokemonsNoBody(pokemons);

    if (!pokemon) {
      return res.status(404).json(errorMsg[404].msgCampoIncorreto);
    }

    next();
  } catch (error) {
    
    return res.status(500).json(errorMsg[500]);
  }
};

module.exports = intermediario;
