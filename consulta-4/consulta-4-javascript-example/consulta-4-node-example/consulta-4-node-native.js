var http = require("http");

var options = {
  "method": "GET",
  "hostname": "186.249.34.34",
  "port": null,
  "path": "/consulta/?email=consulta%40enterplug.com.br&senha=consulta&codigoProduto=4&tipoConsumidor=F&documentoConsumidor=42924057191",
  "headers": {
    "authorization": "Basic ZW50ZXJwbHVnOnBsdWdlbnRlcg==",
    "cache-control": "no-cache",
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
