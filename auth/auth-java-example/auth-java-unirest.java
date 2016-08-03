HttpResponse<String> response = Unirest.post("http://186.249.34.34/auth")
  .header("content-type", "application/json")
  .header("cache-control", "no-cache")
  .body("{\n    \"email\": \"consulta@enterplug.com.br\",\n    \"password\": \"consulta\"\n}")
  .asString();
