#Python 3
import http.client

conn = http.client.HTTPConnection("186.249.34.34")

payload = "-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"username\"\r\n\r\ntom\r\n-----011000010111000001101001--"

headers = {
    'content-type': "multipart/form-data; boundary=---011000010111000001101001",
    'authorization': "Basic ZW50ZXJwbHVnOnBsdWdlbnRlcg==",
    'cache-control': "no-cache",
    }

conn.request("GET", "/consulta/?email=henrique%40enterplug.com.br&senha=enterplug&codigoProduto=4&tipoConsumidor=F&documentoConsumidor=42924057191", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
