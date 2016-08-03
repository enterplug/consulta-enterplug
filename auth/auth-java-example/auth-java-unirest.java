HttpResponse<String> response = Unirest.post("http://127.0.0.1:8080/auth")
  .header("content-type", "application/json")
  .header("cache-control", "no-cache")
  .body("{\n    \"email\": \"consulta@enterplug.com.br\",\n    \"password\": \"consulta\"\n}")
  .asString();
