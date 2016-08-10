var unirest = require("unirest");

var req = unirest("POST", "http://186.249.34.34/api/consulta");

req.headers({
    "cache-control": "no-cache",
    "authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwODU3ODQwfQ.g7E2ABhES7yQXoIfpBTv30yDjal07EEI9i9Tu-d1Jjksxpv1UseaZpbjfqeNKF3pi_-xeX5ihN2EITPg184oaA",
    "content-type": "application/json"
});

req.type("json");
req.send({
    "codigoProduto": "178",
    "tipoConsumidor": "J",
    "documentoConsumidor": "02117943000124",
    "cepConsumidor": "14401-360",
    "cepOrigem": "14401-360",
    "codigoEstacaoConsultante": "123"
});

req.end(function(res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});
