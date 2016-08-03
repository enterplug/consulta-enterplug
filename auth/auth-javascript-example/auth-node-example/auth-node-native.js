var http = require("http");

var options = {
  "method": "POST",
  "hostname": "186.249.34.34",
  "port": null,
  "path": "/auth",
  "headers": {
    "content-type": "application/json",
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

req.write(JSON.stringify({ email: 'consulta@enterplug.com.br', password: 'consulta' }));
req.end();
