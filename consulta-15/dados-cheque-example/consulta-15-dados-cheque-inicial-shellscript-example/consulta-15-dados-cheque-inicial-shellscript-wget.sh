wget --quiet \
  --method POST \
  --header 'content-type: application/json' \
  --header 'authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwODU3ODQwfQ.g7E2ABhES7yQXoIfpBTv30yDjal07EEI9i9Tu-d1Jjksxpv1UseaZpbjfqeNKF3pi_-xeX5ihN2EITPg184oaA' \
  --header 'cache-control: no-cache' \
  --body-data '{\n    "codigoProduto": "119",\n    "tipoConsumidor": "F",\n    "documentoConsumidor": "42924057191",\n    "cepOrigem": "14401-360",\n    "codigoEstacaoConsultante": "123"\n}' \
  --output-document \
  - http://186.249.34.34/api/consulta
