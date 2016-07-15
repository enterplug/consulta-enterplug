#Python 3
import http.client

conn = http.client.HTTPConnection("186.249.34.34")

headers = {
    'authorization': "Basic ZW50ZXJwbHVnOnBsdWdlbnRlcg==",
    'cache-control': "no-cache",
    }

conn.request("GET", "/consulta/?email=consulta%40enterplug.com.br&senha=consulta&codigoProduto=4&tipoConsumidor=F&documentoConsumidor=42924057191", headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
