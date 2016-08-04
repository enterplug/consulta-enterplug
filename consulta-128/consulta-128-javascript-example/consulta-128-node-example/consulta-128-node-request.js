var request = require("request");

var options = {
    method: 'POST',
    url: 'http://186.249.34.34/api/consulta',
    headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoZW5yaXF1ZUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwMzIxNDQ4fQ.b6Qsb9jl3mkO7pMKDiy_A4fLkVQcK_YGEOZgzP8pMi38K0zxXtpOvRBKpujoO0iHXquVpoKS98kcvd5GJGloeA'
    },
    body: {
        codigoProduto: '4',
        tipoConsumidor: 'F',
        documentoConsumidor: '42012644830',
        telefoneConsultar: {
            ddd: '16',
            numero: '999999999'
        },
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
