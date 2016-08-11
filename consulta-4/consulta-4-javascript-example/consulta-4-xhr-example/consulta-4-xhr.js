var data = JSON.stringify({
    "codigoProduto": "4",
    "tipoConsumidor": "F",
    "documentoConsumidor": "42924057191",
    "cepConsumidor": "14401360",
    "cepOrigem": "14401360",
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
xhr.setRequestHeader("authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwOTM2Njg1fQ.o_8klFgjA2EZSzeyIAczCQU6lRWRJZBtkFcJvidtcVo_abWtS8Xis2Qg4C3aArCIYTyZjr3aPLb4LSd9aqzFFQ");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);
