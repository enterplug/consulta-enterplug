import http.client

conn = http.client.HTTPConnection("186.249.34.34")

payload = "{\n\"email\": \"consulta@enterplug.com.br\",\n\"password\": \"consulta\"\n}"

headers = {
    'content-type': "application/json",
    'cache-control': "no-cache",
    }

conn.request("POST", "/api/consulta/", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
