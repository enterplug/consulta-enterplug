var http = require("http");

var options = {
    "method": "POST",
    "hostname": "186.249.34.34",
    "port": null,
    "path": "/api/consulta",
    "headers": {
        "authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoZW5yaXF1ZUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwMzIxNDQ4fQ.b6Qsb9jl3mkO7pMKDiy_A4fLkVQcK_YGEOZgzP8pMi38K0zxXtpOvRBKpujoO0iHXquVpoKS98kcvd5GJGloeA",
        "content-type": "application/json",
        "cache-control": "no-cache",
    }
};

var req = http.request(options, function(res) {
    var chunks = [];

    res.on("data", function(chunk) {
        chunks.push(chunk);
    });

    res.on("end", function() {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.write(JSON.stringify({
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
}));
req.end();
