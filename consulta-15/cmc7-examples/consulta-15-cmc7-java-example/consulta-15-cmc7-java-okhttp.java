OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n    \"codigoProduto\": \"15\",\n    \"tipoConsumidor\": \"F\",\n    \"documentoConsumidor\": \"11111111111\",\n    \"dataNascimentoRg\": \"1938-01-23T00:00:00\",\n    \"telefoneConsultar\": {\n        \"ddd\": \"11\",\n        \"numero\": \"35496800\"\n    },\n    \"cepConsumidor\": \"04003010\",\n    \"utilizaCMC7\": \"true\",\n    \"cmc71ChequeInicial\": \"34140848\",\n    \"cmc72ChequeInicial\": \"0000000015\",\n    \"cmc73ChequeInicial\": \"800000519991\",\n    \"quantidadeCheque\": \"1\",\n    \"chequeDetalhado\": [\n    {\n        \"numero\": \"1\",\n        \"digito\": \"9\",\n        \"dataDeposito\": \"2016-08-11T00:00:00\",\n        \"valor\": \"100\"\n    }],\n    \"cepOrigem\": \"04003010\",\n    \"codigoEstacaoConsultante\": \"123\"\n}");
Request request = new Request.Builder()
  .url("http://localhost:8080/api/consulta")
  .post(body)
  .addHeader("content-type", "application/json")
  .addHeader("authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwODU3ODQwfQ.g7E2ABhES7yQXoIfpBTv30yDjal07EEI9i9Tu-d1Jjksxpv1UseaZpbjfqeNKF3pi_-xeX5ihN2EITPg184oaA")
  .addHeader("cache-control", "no-cache")
  .build();

Response response = client.newCall(request).execute();
