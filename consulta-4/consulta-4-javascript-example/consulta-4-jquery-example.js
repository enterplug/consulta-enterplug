var form = new FormData();

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://186.249.34.34/consulta/?email=henrique%40enterplug.com.br&senha=enterplug&codigoProduto=4&tipoConsumidor=F&documentoConsumidor=42924057191",
  "method": "GET",
  "headers": {
    "authorization": "Basic ZW50ZXJwbHVnOnBsdWdlbnRlcg==",
    "cache-control": "no-cache",
  },
  "processData": false,
  "contentType": false,
  "mimeType": "multipart/form-data",
  "data": form
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
