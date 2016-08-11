var unirest = require("unirest");

var req = unirest("POST", "http://186.249.34.34/api/consulta");

req.headers({
    "postman-token": "4a356887-136c-47a2-026d-ab6ec1976dc9",
    "cache-control": "no-cache",
    "authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwOTM2Njg1fQ.o_8klFgjA2EZSzeyIAczCQU6lRWRJZBtkFcJvidtcVo_abWtS8Xis2Qg4C3aArCIYTyZjr3aPLb4LSd9aqzFFQ",
    "content-type": "application/json"
});

req.type("json");
req.send({
    "codigoProduto": "4",
    "tipoConsumidor": "F",
    "documentoConsumidor": "42924057191",
    "cepConsumidor": "14401360",
    "cepOrigem": "14401360",
    "codigoEstacaoConsultante": "123"
});

req.end(function(res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});
var unirest = require("unirest");

var req = unirest("POST", "http://186.249.34.34/api/consulta");

req.headers({
    "cache-control": "no-cache",
    "authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwOTM2Njg1fQ.o_8klFgjA2EZSzeyIAczCQU6lRWRJZBtkFcJvidtcVo_abWtS8Xis2Qg4C3aArCIYTyZjr3aPLb4LSd9aqzFFQ",
    "content-type": "application/json"
});

req.type("json");
req.send({
    "codigoProduto": "4",
    "tipoConsumidor": "F",
    "documentoConsumidor": "42924057191",
    "cepConsumidor": "14401360",
    "cepOrigem": "14401360",
    "codigoEstacaoConsultante": "123"
});

req.end(function(res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});
