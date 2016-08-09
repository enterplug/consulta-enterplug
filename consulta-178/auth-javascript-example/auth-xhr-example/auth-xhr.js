var data = JSON.stringify({
  "codigoProduto": "178",
  "tipoConsumidor": "J",
  "documentoConsumidor": "02117943000124",
  "cepConsumidor": "14401-360",
  "cepOrigem": "14401-360",
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
xhr.setRequestHeader("authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwODU3ODQwfQ.g7E2ABhES7yQXoIfpBTv30yDjal07EEI9i9Tu-d1Jjksxpv1UseaZpbjfqeNKF3pi_-xeX5ihN2EITPg184oaA");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);
