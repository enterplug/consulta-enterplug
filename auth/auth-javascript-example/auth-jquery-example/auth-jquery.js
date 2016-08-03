var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://186.249.34.34/auth",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "cache-control": "no-cache",
  },
  "processData": false,
  "data": "{\n    \"email\": \"consulta@enterplug.com.br\",\n    \"password\": \"consulta\"\n}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
