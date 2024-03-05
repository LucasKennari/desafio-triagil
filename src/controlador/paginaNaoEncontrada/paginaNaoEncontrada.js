const errorMsg = require("../../utils/conttroleDeError/controleDeError");

const paginaNaoEncontrada = (req, res) => {
  return res.status(404).json(errorMsg[404].msgPaginaNaoEncontrada);
};

module.exports = paginaNaoEncontrada;
