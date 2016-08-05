import http.client

conn = http.client.HTTPConnection("186.249.34.34")

payload = "{\n    \"codigoProduto\": \"4\",\n    \"tipoConsumidor\": \"F\",\n    \"documentoConsumidor\": \"42924057191\",\n    \"cepConsumidor\": \"14401-360\",\n    \"cepOrigem\": \"14401-360\",\n    \"codigoEstacaoConsultante\": \"123\"\n}"

headers = {
    'authorization': "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoZW5yaXF1ZUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwMzIxNDQ4fQ.b6Qsb9jl3mkO7pMKDiy_A4fLkVQcK_YGEOZgzP8pMi38K0zxXtpOvRBKpujoO0iHXquVpoKS98kcvd5GJGloeA",
    'content-type': "application/json",
    'cache-control': "no-cache",
    }

conn.request("POST", "/api/consulta", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
