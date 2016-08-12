wget --quiet \
  --method POST \
  --header 'content-type: application/json' \
  --header 'authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwOTM2Njg1fQ.o_8klFgjA2EZSzeyIAczCQU6lRWRJZBtkFcJvidtcVo_abWtS8Xis2Qg4C3aArCIYTyZjr3aPLb4LSd9aqzFFQ' \
  --header 'cache-control: no-cache' \
  --body-data '{\n    "codigoProduto": "332",\n    "tipoConsumidor": "J",\n    "documentoConsumidor": "02117943000124",\n    "cepOrigem": "14401-360",\n    "codigoEstacaoConsultante": "123"\n}' \
  --output-document \
  - http://186.249.34.34/api/consulta
