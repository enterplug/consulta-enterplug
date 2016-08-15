OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n    \"codigoProduto\": \"5\",\n    \"tipoConsumidor\": \"J\",\n    \"documentoConsumidor\": \"02117943000124\",\n    \"telefoneConsultar\": {\n    \"ddd\": \"16\",\n    \"numero\": \"999999999\"\n    },\n    \"cepConsumidor\": \"04003010\",\n    \"cepOrigem\": \"04003010\",\n    \"codigoEstacaoConsultante\": \"123\"\n}");
Request request = new Request.Builder()
  .url("http://186.249.34.34/api/consulta")
  .post(body)
  .addHeader("content-type", "application/json")
  .addHeader("authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcxMzUyMTk2fQ.0gmJeaAXkAXKU9-Dc0Ke7kXp1mytbIf9A3wf59Hvzz_UBxzXZSpt9H93Y-ITemY9KmekMEBO5gmezVm5hSGPHg")
  .addHeader("cache-control", "no-cache")
  .build();

Response response = client.newCall(request).execute();
