require 'uri'
require 'net/http'

url = URI("http://186.249.34.34/api/consulta")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["authorization"] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoZW5yaXF1ZUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwMzIxNDQ4fQ.b6Qsb9jl3mkO7pMKDiy_A4fLkVQcK_YGEOZgzP8pMi38K0zxXtpOvRBKpujoO0iHXquVpoKS98kcvd5GJGloeA'
request["content-type"] = 'application/json'
request["cache-control"] = 'no-cache'
request.body = "{\n    \"codigoProduto\": \"4\",\n    \"tipoConsumidor\": \"F\",\n    \"documentoConsumidor\": \"42012644830\",\n    \"telefoneConsultar\": {\n        \"ddd\": \"16\",\n        \"numero\": \"999999999\"\n    },\n    \"cepConsumidor\": \"14401-360\",\n    \"cepOrigem\": \"14401-360\",\n    \"codigoEstacaoConsultante\": \"123\"\n}"

response = http.request(request)
puts response.read_body
