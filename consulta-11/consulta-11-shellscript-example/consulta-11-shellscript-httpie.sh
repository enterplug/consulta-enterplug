echo '{
    "codigoProduto": "11",
    "tipoConsumidor": "F",
    "documentoConsumidor": "42924057191",
    "telefoneConsultar": {
    "ddd": "16",
    "numero": "999999999"
    },
    "cepConsumidor": "14401-360",
    "cepOrigem": "14401-360",
    "codigoEstacaoConsultante": "123"
}' |  \
  http POST http://186.249.34.34/api/consulta \
  authorization:'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwODU3ODQwfQ.g7E2ABhES7yQXoIfpBTv30yDjal07EEI9i9Tu-d1Jjksxpv1UseaZpbjfqeNKF3pi_-xeX5ihN2EITPg184oaA' \
  cache-control:no-cache \
  content-type:application/json
