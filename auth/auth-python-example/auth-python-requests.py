import requests

url = "http://127.0.0.1:8080/auth"

payload = "{\n    \"email\": \"henrique@enterplug.com.br\",\n    \"password\": \"enterplug\"\n}"
headers = {
    'content-type': "application/json",
    'cache-control': "no-cache",
    }

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
