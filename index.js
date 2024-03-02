const { servidor, port } = require("./src/servidor/servidor");

servidor.listen(port, () => {
  console.log("Servidor on!!");
});
