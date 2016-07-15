var data = new FormData();

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "http://186.249.34.34/consulta/?email=henrique%40enterplug.com.br&senha=enterplug&codigoProduto=4&tipoConsumidor=F&documentoConsumidor=42924057191");
xhr.setRequestHeader("authorization", "Basic ZW50ZXJwbHVnOnBsdWdlbnRlcg==");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);
