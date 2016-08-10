var client = new RestClient("http://186.249.34.34/api/consulta");
var request = new RestRequest(Method.POST);
request.AddHeader("cache-control", "no-cache");
request.AddHeader("authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwODU3ODQwfQ.g7E2ABhES7yQXoIfpBTv30yDjal07EEI9i9Tu-d1Jjksxpv1UseaZpbjfqeNKF3pi_-xeX5ihN2EITPg184oaA");
request.AddHeader("content-type", "application/json");
request.AddParameter("application/json", "{\n    \"codigoProduto\": \"11\",\n    \"tipoConsumidor\": \"F\",\n    \"documentoConsumidor\": \"42924057191\",\n    \"telefoneConsultar\": {\n    \"ddd\": \"16\",\n    \"numero\": \"999999999\"\n    },\n    \"cepConsumidor\": \"14401-360\",\n    \"cepOrigem\": \"14401-360\",\n    \"codigoEstacaoConsultante\": \"123\"\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
