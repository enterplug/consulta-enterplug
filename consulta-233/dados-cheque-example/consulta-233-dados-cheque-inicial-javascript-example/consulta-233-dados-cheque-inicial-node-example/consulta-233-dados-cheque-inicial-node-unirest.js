var unirest = require("unirest");

var req = unirest("POST", "http://186.249.34.34/api/consulta");

req.headers({
    "cache-control": "no-cache",
    "authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwOTM2Njg1fQ.o_8klFgjA2EZSzeyIAczCQU6lRWRJZBtkFcJvidtcVo_abWtS8Xis2Qg4C3aArCIYTyZjr3aPLb4LSd9aqzFFQ",
    "content-type": "application/json"
});

req.type("json");
req.send({
    "codigoProduto": "233",
    "tipoConsumidor": "F",
    "documentoConsumidor": "11111111111",
    "dataNascimentoRg": "1938-01-23T00:00:00",
    "telefoneConsultar": {
        "ddd": "11",
        "numero": "35496800"
    },
    "cepConsumidor": "04003010",
    "utilizaCMC7": "false",
    "bancoChequeInicial": "756",
    "agenciaChequeInicial": "4084",
    "contaCorrenteChequeInicial": "51999",
    "digitoContaCorrenteChequeInicial": "2",
    "numeroChequeInicial": "1",
    "digitoChequeInicial": "9",
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
