HttpResponse<String> response = Unirest.post("http://186.249.34.34/api/consulta")
  .header("content-type", "application/json")
  .header("authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwODU3ODQwfQ.g7E2ABhES7yQXoIfpBTv30yDjal07EEI9i9Tu-d1Jjksxpv1UseaZpbjfqeNKF3pi_-xeX5ihN2EITPg184oaA")
  .header("cache-control", "no-cache")
  .body("{\n    \"codigoProduto\": \"178\",\n    \"tipoConsumidor\": \"J\",\n    \"documentoConsumidor\": \"02117943000124\",\n    \"cepConsumidor\": \"14401-360\",\n    \"cepOrigem\": \"14401-360\",\n    \"codigoEstacaoConsultante\": \"123\"\n}")
  .asString();
