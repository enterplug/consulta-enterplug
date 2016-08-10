import http.client

conn = http.client.HTTPConnection("186.249.34.34")

payload = "{\n    \"codigoProduto\": \"332\",\n    \"tipoConsumidor\": \"J\",\n    \"documentoConsumidor\": \"02117943000124\",\n    \"cepOrigem\": \"14401-360\",\n    \"codigoEstacaoConsultante\": \"123\"\n}"

headers = {
    'content-type': "application/json",
    'authorization': "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwOTM2Njg1fQ.o_8klFgjA2EZSzeyIAczCQU6lRWRJZBtkFcJvidtcVo_abWtS8Xis2Qg4C3aArCIYTyZjr3aPLb4LSd9aqzFFQ",
    'cache-control': "no-cache",
    }

conn.request("POST", "/api/consulta", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
