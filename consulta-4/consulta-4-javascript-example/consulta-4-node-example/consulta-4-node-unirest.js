var unirest = require("unirest");

var req = unirest("GET", "http://186.249.34.34/consulta/");

req.query({
  "email": "consulta@enterplug.com.br",
  "senha": "consulta",
  "codigoProduto": "4",
  "tipoConsumidor": "F",
  "documentoConsumidor": "42924057191"
});

req.headers({
  "cache-control": "no-cache",
  "authorization": "Basic ZW50ZXJwbHVnOnBsdWdlbnRlcg==",
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
