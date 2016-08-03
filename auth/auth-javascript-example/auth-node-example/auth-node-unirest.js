var unirest = require("unirest");

var req = unirest("POST", "http://186.249.34.34/auth");

req.headers({
    "cache-control": "no-cache",
    "content-type": "application/json"
});

req.type("json");
req.send({
    "email": "consulta@enterplug.com.br",
    "password": "consulta"
});

req.end(function(res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});
