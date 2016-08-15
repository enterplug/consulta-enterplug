var http = require("http");

var options = {
    "method": "POST",
    "hostname": "186.249.34.34",
    "port": null,
    "path": "/api/consulta",
    "headers": {
        "content-type": "application/json",
        "authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcxMDk0ODAyfQ.7sFvaqTEg4802WcRk1OoOc7Ao3YYmc5g7jENqoc8glae0m6PoJyOs-FMSJ_Bs1Tzs8DrMgJPFxx0Mx5COQgzDw",
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
    codigoProduto: '331',
    tipoConsumidor: 'F',
    documentoConsumidor: '11111111111',
    dataNascimentoRg: '1938-01-23T00:00:00',
    cepConsumidor: '04003010',
    cepOrigem: '04003010',
    codigoEstacaoConsultante: '123'
}));
req.end();
