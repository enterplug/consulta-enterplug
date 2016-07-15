#Python utilizando requests

import requests

url = "http://186.249.34.34/consulta/"

querystring = {"email":"consulta@enterplug.com.br","senha":"consulta","codigoProduto":"4","tipoConsumidor":"F","documentoConsumidor":"42924057191"}

headers = {
    'authorization': "Basic ZW50ZXJwbHVnOnBsdWdlbnRlcg==",
    'cache-control': "no-cache",
    }

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)
