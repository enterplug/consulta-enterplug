require 'uri'
require 'net/http'

url = URI("http://186.249.34.34/api/consulta")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'
request["authorization"] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwOTM2Njg1fQ.o_8klFgjA2EZSzeyIAczCQU6lRWRJZBtkFcJvidtcVo_abWtS8Xis2Qg4C3aArCIYTyZjr3aPLb4LSd9aqzFFQ'
request["cache-control"] = 'no-cache'
request.body = "{\n    \"codigoProduto\": \"332\",\n    \"tipoConsumidor\": \"J\",\n    \"documentoConsumidor\": \"02117943000124\",\n    \"cepOrigem\": \"14401-360\",\n    \"codigoEstacaoConsultante\": \"123\"\n}"

response = http.request(request)
puts response.read_body
