var request = require("request");

var options = {
    method: 'POST',
    url: 'http://186.249.34.34/api/consulta',
    headers: {
        'cache-control': 'no-cache',
        'authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwOTM2Njg1fQ.o_8klFgjA2EZSzeyIAczCQU6lRWRJZBtkFcJvidtcVo_abWtS8Xis2Qg4C3aArCIYTyZjr3aPLb4LSd9aqzFFQ',
        'content-type': 'application/json'
    },
    body: {
        codigoProduto: '4',
        tipoConsumidor: 'F',
        documentoConsumidor: '42924057191',
        cepConsumidor: '14401360',
        cepOrigem: '14401360',
        codigoEstacaoConsultante: '123'
    },
    json: true
};

request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});
