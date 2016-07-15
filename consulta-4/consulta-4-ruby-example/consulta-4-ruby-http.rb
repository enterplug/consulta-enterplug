require 'uri'
require 'net/http'

url = URI("http://186.249.34.34/consulta/?email=henrique%40enterplug.com.br&senha=enterplug&codigoProduto=4&tipoConsumidor=F&documentoConsumidor=42924057191")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["authorization"] = 'Basic ZW50ZXJwbHVnOnBsdWdlbnRlcg=='
request["cache-control"] = 'no-cache'

response = http.request(request)
puts response.read_body
