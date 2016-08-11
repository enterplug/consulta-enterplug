import requests

url = "http://186.249.34.34/api/consulta"

payload = "{\n    \"codigoProduto\": \"4\",\n    \"tipoConsumidor\": \"F\",\n    \"documentoConsumidor\": \"42924057191\",\n    \"cepConsumidor\": \"14401360\",\n    \"cepOrigem\": \"14401360\",\n    \"codigoEstacaoConsultante\": \"123\"\n}"
headers = {
    'content-type': "application/json",
    'authorization': "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwOTM2Njg1fQ.o_8klFgjA2EZSzeyIAczCQU6lRWRJZBtkFcJvidtcVo_abWtS8Xis2Qg4C3aArCIYTyZjr3aPLb4LSd9aqzFFQ",
    'cache-control': "no-cache",
    }

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
