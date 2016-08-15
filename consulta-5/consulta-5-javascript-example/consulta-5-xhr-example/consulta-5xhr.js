var data = JSON.stringify({
    "codigoProduto": "5",
    "tipoConsumidor": "J",
    "documentoConsumidor": "02117943000124",
    "telefoneConsultar": {
        "ddd": "16",
        "numero": "999999999"
    },
    "cepConsumidor": "04003010",
    "cepOrigem": "04003010",
    "codigoEstacaoConsultante": "123"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
        console.log(this.responseText);
    }
});

xhr.open("POST", "http://186.249.34.34/api/consulta");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcxMzUyMTk2fQ.0gmJeaAXkAXKU9-Dc0Ke7kXp1mytbIf9A3wf59Hvzz_UBxzXZSpt9H93Y-ITemY9KmekMEBO5gmezVm5hSGPHg");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.send(data);
