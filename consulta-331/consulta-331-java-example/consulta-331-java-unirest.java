HttpResponse<String> response = Unirest.post("http://186.249.34.34/api/consulta")
  .header("content-type", "application/json")
  .header("authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcxMDk0ODAyfQ.7sFvaqTEg4802WcRk1OoOc7Ao3YYmc5g7jENqoc8glae0m6PoJyOs-FMSJ_Bs1Tzs8DrMgJPFxx0Mx5COQgzDw")
  .header("cache-control", "no-cache")
  .body("{\n    \"codigoProduto\": \"331\",\n    \"tipoConsumidor\": \"F\",\n    \"documentoConsumidor\": \"11111111111\",\n    \"dataNascimentoRg\": \"1938-01-23T00:00:00\",\n    \"cepConsumidor\": \"04003010\",\n    \"cepOrigem\": \"04003010\",\n    \"codigoEstacaoConsultante\": \"123\"\n}")
  .asString();
