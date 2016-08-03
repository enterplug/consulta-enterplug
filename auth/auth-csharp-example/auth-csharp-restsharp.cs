var client = new RestClient("http://186.249.34.34/auth");
var request = new RestRequest(Method.POST);
request.AddHeader("cache-control", "no-cache");
request.AddHeader("content-type", "application/json");
request.AddParameter("application/json", "{\n    \"email\": \"consulta@enterplug.com.br\",\n    \"password\": \"consulta\"\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
