const paginaNaoEncontrada = (req, res) => {
  return res.status(404).json({ Error: "Página não encontrada" });
};

module.exports = paginaNaoEncontrada;
