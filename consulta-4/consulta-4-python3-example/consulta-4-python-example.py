#Python utilizando requests

import requests

url = "http://186.249.34.34/consulta/"

querystring = {"email":"henrique@enterplug.com.br","senha":"enterplug","codigoProduto":"4","tipoConsumidor":"F","documentoConsumidor":"42924057191"}

headers = {
    'content-type': "multipart/form-data; boundary=---011000010111000001101001",
    'authorization': "Basic ZW50ZXJwbHVnOnBsdWdlbnRlcg==",
    'cache-control': "no-cache",
    'postman-token': "0859a01c-b37f-915b-e924-557a968b6e72"
    }

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)
