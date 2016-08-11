OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n    \"codigoProduto\": \"4\",\n    \"tipoConsumidor\": \"F\",\n    \"documentoConsumidor\": \"42924057191\",\n    \"cepConsumidor\": \"14401360\",\n    \"cepOrigem\": \"14401360\",\n    \"codigoEstacaoConsultante\": \"123\"\n}");
Request request = new Request.Builder()
  .url("http://186.249.34.34/api/consulta")
  .post(body)
  .addHeader("content-type", "application/json")
  .addHeader("authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwOTM2Njg1fQ.o_8klFgjA2EZSzeyIAczCQU6lRWRJZBtkFcJvidtcVo_abWtS8Xis2Qg4C3aArCIYTyZjr3aPLb4LSd9aqzFFQ")
  .addHeader("cache-control", "no-cache")
  .build();

Response response = client.newCall(request).execute();
