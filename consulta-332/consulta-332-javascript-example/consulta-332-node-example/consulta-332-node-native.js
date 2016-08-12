var http = require("http");

var options = {
    "method": "POST",
    "hostname": "186.249.34.34",
    "port": null,
    "path": "/api/consulta",
    "headers": {
        "content-type": "application/json",
        "authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwOTM2Njg1fQ.o_8klFgjA2EZSzeyIAczCQU6lRWRJZBtkFcJvidtcVo_abWtS8Xis2Qg4C3aArCIYTyZjr3aPLb4LSd9aqzFFQ",
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
    codigoProduto: '332',
    tipoConsumidor: 'J',
    documentoConsumidor: '02117943000124',
    cepOrigem: '14401-360',
    codigoEstacaoConsultante: '123'
}));
req.end();
