var client = new RestClient("http://186.249.34.34/api/consulta");
var request = new RestRequest(Method.POST);
request.AddHeader("cache-control", "no-cache");
request.AddHeader("authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcxMzUyMTk2fQ.0gmJeaAXkAXKU9-Dc0Ke7kXp1mytbIf9A3wf59Hvzz_UBxzXZSpt9H93Y-ITemY9KmekMEBO5gmezVm5hSGPHg");
request.AddHeader("content-type", "application/json");
request.AddParameter("application/json", "{\n    \"codigoProduto\": \"5\",\n    \"tipoConsumidor\": \"J\",\n    \"documentoConsumidor\": \"02117943000124\",\n    \"telefoneConsultar\": {\n    \"ddd\": \"16\",\n    \"numero\": \"999999999\"\n    },\n    \"cepConsumidor\": \"04003010\",\n    \"cepOrigem\": \"04003010\",\n    \"codigoEstacaoConsultante\": \"123\"\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
