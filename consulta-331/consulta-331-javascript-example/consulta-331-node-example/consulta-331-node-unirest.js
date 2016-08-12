var unirest = require("unirest");

var req = unirest("POST", "http://186.249.34.34/api/consulta");

req.headers({
    "cache-control": "no-cache",
    "authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcxMDk0ODAyfQ.7sFvaqTEg4802WcRk1OoOc7Ao3YYmc5g7jENqoc8glae0m6PoJyOs-FMSJ_Bs1Tzs8DrMgJPFxx0Mx5COQgzDw",
    "content-type": "application/json"
});

req.type("json");
req.send({
    "codigoProduto": "331",
    "tipoConsumidor": "F",
    "documentoConsumidor": "11111111111",
    "dataNascimentoRg": "1938-01-23T00:00:00",
    "cepConsumidor": "04003010",
    "cepOrigem": "04003010",
    "codigoEstacaoConsultante": "123"
});

req.end(function(res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});
