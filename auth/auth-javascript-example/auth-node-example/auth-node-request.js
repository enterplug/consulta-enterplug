var request = require("request");

var options = {
    method: 'POST',
    url: 'http://186.249.34.34/auth',
    headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/json'
    },
    body: {
        email: 'consulta@enterplug.com.br',
        password: 'consulta'
    },
    json: true
};

request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});
