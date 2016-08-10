echo '{
    "codigoProduto": "332",
    "tipoConsumidor": "J",
    "documentoConsumidor": "02117943000124",
    "cepOrigem": "14401-360",
    "codigoEstacaoConsultante": "123"
}' |  \
  http POST http://186.249.34.34/api/consulta \
  authorization:'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwOTM2Njg1fQ.o_8klFgjA2EZSzeyIAczCQU6lRWRJZBtkFcJvidtcVo_abWtS8Xis2Qg4C3aArCIYTyZjr3aPLb4LSd9aqzFFQ' \
  cache-control:no-cache \
  content-type:application/json
