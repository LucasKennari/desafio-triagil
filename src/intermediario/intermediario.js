const intermediario = async (req, res, next) => {
  const { owner, pokemons } = req.body;

  try {
    if (!owner || !owner.trim()) {
      return res
        .status(404)
        .json({ Mensagem: "Por favor insira um nome na propriedade owner" });
    }
    if (pokemons.includes([])) {
      return res.status(404).json({ Mensagem: "Por favor insira coloque []" });
    }

    // for (let i = 0; i <= pokemons.length; i++) {
    //   if (!pokemons[i] || !pokemons[i].trim()) {
    //     return res
    //       .status(404)
    //       .json({ Mensagem: "Por favor insira um pokemon" });
    //   }
    // }

    next();
  } catch (error) {
    return res.status(500).json({ Error: "Error interno do servidor." });
  }
};

module.exports = intermediario;
