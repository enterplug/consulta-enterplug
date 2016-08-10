var unirest = require("unirest");

var req = unirest("POST", "http://localhost:8080/api/consulta");

req.headers({
    "cache-control": "no-cache",
    "authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwODU3ODQwfQ.g7E2ABhES7yQXoIfpBTv30yDjal07EEI9i9Tu-d1Jjksxpv1UseaZpbjfqeNKF3pi_-xeX5ihN2EITPg184oaA",
    "content-type": "application/json"
});

req.type("json");
req.send({
    "codigoProduto": "15",
    "tipoConsumidor": "F",
    "documentoConsumidor": "11111111111",
    "dataNascimentoRg": "1938-01-23T00:00:00",
    "telefoneConsultar": {
        "ddd": "11",
        "numero": "35496800"
    },
    "cepConsumidor": "04003010",
    "utilizaCMC7": "true",
    "cmc71ChequeInicial": "34140848",
    "cmc72ChequeInicial": "0000000015",
    "cmc73ChequeInicial": "800000519991",
    "quantidadeCheque": "1",
    "chequeDetalhado": [{
        "numero": "1",
        "digito": "9",
        "dataDeposito": "2016-08-11T00:00:00",
        "valor": "100"
    }],
    "cepOrigem": "04003010",
    "codigoEstacaoConsultante": "123"
});

req.end(function(res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});
