const route = require("express")();

route.get("/", (req, res) => {
  res.send("VIVO");
});

module.exports = route;
