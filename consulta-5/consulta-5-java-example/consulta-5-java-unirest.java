HttpResponse<String> response = Unirest.post("http://186.249.34.34/api/consulta")
  .header("content-type", "application/json")
  .header("authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcxMzUyMTk2fQ.0gmJeaAXkAXKU9-Dc0Ke7kXp1mytbIf9A3wf59Hvzz_UBxzXZSpt9H93Y-ITemY9KmekMEBO5gmezVm5hSGPHg")
  .header("cache-control", "no-cache")
  .body("{\n    \"codigoProduto\": \"5\",\n    \"tipoConsumidor\": \"J\",\n    \"documentoConsumidor\": \"02117943000124\",\n    \"telefoneConsultar\": {\n    \"ddd\": \"16\",\n    \"numero\": \"999999999\"\n    },\n    \"cepConsumidor\": \"04003010\",\n    \"cepOrigem\": \"04003010\",\n    \"codigoEstacaoConsultante\": \"123\"\n}")
  .asString();
