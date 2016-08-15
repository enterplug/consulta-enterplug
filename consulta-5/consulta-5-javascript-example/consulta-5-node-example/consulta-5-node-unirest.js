var unirest = require("unirest");

var req = unirest("POST", "http://186.249.34.34/api/consulta");

req.headers({
    "cache-control": "no-cache",
    "authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcxMzUyMTk2fQ.0gmJeaAXkAXKU9-Dc0Ke7kXp1mytbIf9A3wf59Hvzz_UBxzXZSpt9H93Y-ITemY9KmekMEBO5gmezVm5hSGPHg",
    "content-type": "application/json"
});

req.type("json");
req.send({
    "codigoProduto": "5",
    "tipoConsumidor": "J",
    "documentoConsumidor": "02117943000124",
    "telefoneConsultar": {
        "ddd": "16",
        "numero": "999999999"
    },
    "cepConsumidor": "04003010",
    "cepOrigem": "04003010",
    "codigoEstacaoConsultante": "123"
});

req.end(function(res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});
