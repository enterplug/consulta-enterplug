var request = require("request");

var options = { method: 'GET',
  url: 'http://186.249.34.34/consulta/',
  qs:
   { email: 'henrique@enterplug.com.br',
     senha: 'enterplug',
     codigoProduto: '4',
     tipoConsumidor: 'F',
     documentoConsumidor: '42924057191' },
  headers: {
    'cache-control': 'no-cache',
     'authorization': 'Basic ZW50ZXJwbHVnOnBsdWdlbnRlcg=='
   }
 };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
