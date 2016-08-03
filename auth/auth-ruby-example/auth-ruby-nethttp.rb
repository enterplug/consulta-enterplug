require 'uri'
require 'net/http'

url = URI("http://186.249.34.34/auth")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'
request["cache-control"] = 'no-cache'
request.body = "{\n    \"email\": \"consulta@enterplug.com.br\",\n    \"password\": \"consulta\"\n}"

response = http.request(request)
puts response.read_body
