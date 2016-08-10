var request = require("request");

var options = {
    method: 'POST',
    url: 'http://186.249.34.34/api/consulta',
    headers: {
        'cache-control': 'no-cache',
        'authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwODU3ODQwfQ.g7E2ABhES7yQXoIfpBTv30yDjal07EEI9i9Tu-d1Jjksxpv1UseaZpbjfqeNKF3pi_-xeX5ihN2EITPg184oaA',
        'content-type': 'application/json'
    },
    body: {
        codigoProduto: '178',
        tipoConsumidor: 'J',
        documentoConsumidor: '02117943000124',
        cepConsumidor: '14401-360',
        cepOrigem: '14401-360',
        codigoEstacaoConsultante: '123'
    },
    json: true
};

request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});
