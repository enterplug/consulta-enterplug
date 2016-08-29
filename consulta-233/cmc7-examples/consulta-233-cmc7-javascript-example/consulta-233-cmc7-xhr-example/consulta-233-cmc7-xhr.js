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
  "utilizaCMC7": "true",
  "cmc71ChequeInicial": "34140848",
  "cmc72ChequeInicial": "0000000015",
  "cmc73ChequeInicial": "800000519991",
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

xhr.open("POST", "http://localhost:8080/api/consulta");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwODU3ODQwfQ.g7E2ABhES7yQXoIfpBTv30yDjal07EEI9i9Tu-d1Jjksxpv1UseaZpbjfqeNKF3pi_-xeX5ihN2EITPg184oaA");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);
