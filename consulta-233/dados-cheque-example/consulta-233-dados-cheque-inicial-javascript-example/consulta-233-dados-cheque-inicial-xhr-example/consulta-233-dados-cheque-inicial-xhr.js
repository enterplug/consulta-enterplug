var data = JSON.stringify({
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
  "chequeDetalhado": [
    {
      "numero": "1",
      "digito": "9",
      "dataDeposito": "2016-08-11T00:00:00",
      "valor": "100"
    }
  ],
  "cepOrigem": "04003010",
  "codigoEstacaoConsultante": "123"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://186.249.34.34/api/consulta");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwOTM2Njg1fQ.o_8klFgjA2EZSzeyIAczCQU6lRWRJZBtkFcJvidtcVo_abWtS8Xis2Qg4C3aArCIYTyZjr3aPLb4LSd9aqzFFQ");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);
