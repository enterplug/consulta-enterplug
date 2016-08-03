OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n    \"email\": \"consulta@enterplug.com.br\",\n    \"password\": \"consulta\"\n}");
Request request = new Request.Builder()
  .url("http://127.0.0.1:8080/auth")
  .post(body)
  .addHeader("content-type", "application/json")
  .addHeader("cache-control", "no-cache")
  .build();

Response response = client.newCall(request).execute();
