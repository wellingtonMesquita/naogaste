//Importa as dependências que acabamos de instalar
const express = require("express");
const path = require("path");

const app = express();

// Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static(__dirname + "/dist/naogaste"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/naogaste/index.html"));
});

// Inicia a aplicação pela porta configurada
app.listen(process.env.PORT || 8080);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});