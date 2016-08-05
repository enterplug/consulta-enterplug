<p align="center">
  <img src="http://enterplug.com.br/wp-content/uploads/2013/06/logo-Enter2.jpg">
</p>

<h1 align="center">Consulta</h1>

<p align="center">
  Repositório de códigos fontes, exemplos e manuais da API REST Enter&Plug Consulta.
</p>


## Autenticação

Para efetuar autenticação na API REST de consulta é obrigatório o desenvolvedor informar o usuário e senha para a geração do token
de segurança, o token é indexado no cabeçalho da requisição não obrigando o desenvolvedor autenticar o usuário toda vez que
for efetuar uma nova consulta, o token pode ser armazenado aonde o desenvolvedor achar melhor exemplos: Cookie, localStorage, Session, Banco de dados etc...

Segue o **[manual](https://github.com/enterplug/consulta-enterplug/blob/master/auth/autenticacao.pdf) e os exemplos de autenticação em diversas linguagens de programação:

* **[C](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-c-example/auth-c-libcurl.c)**
* **[C#](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-csharp-example/auth-csharp-restsharp.cs)**
  * **[RestSharp](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-csharp-example/auth-csharp-restsharp.cs)**
* **[GO](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-go-example/auth.go)**
* **[Java](https://github.com/enterplug/consulta-enterplug/tree/master/auth/auth-java-example)**
  * **[OKHttp](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-java-example/auth-java-okhttp.java)**
  * **[Unirest](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-java-example/auth-java-unirest.java)**
* **[Javascript](https://github.com/enterplug/consulta-enterplug/tree/master/auth/auth-javascript-example)**
  * **[Node](https://github.com/enterplug/consulta-enterplug/tree/master/auth/auth-javascript-example/auth-node-example)**
    * **[Native](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-javascript-example/auth-node-example/auth-node-native.js)**
    * **[Request](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-javascript-example/auth-node-example/auth-node-request.js)**
    * **[Unirest](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-javascript-example/auth-node-example/auth-node-unirest.js)**
  * **[XHR](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-javascript-example/auth-xhr-example/auth-xhr.js)**
  * **[JQuery](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-javascript-example/auth-jquery-example/auth-jquery.js)**
* **[Object Pascal]()**
  * **[Delphi]()**
* **[Python](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-python-example/)**
  * **[Http.Client](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-python-example/auth-python-httpclient.py)**
  * **[Requests](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-python-example/auth-python-requests.py)**
* **[Ruby](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-ruby-example/auth-ruby-nethttp.rb)**
* **[Shell Script](https://github.com/enterplug/consulta-enterplug/tree/master/auth/auth-shellscript-example)**
  * **[cURL](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-shellscript-example/auth-shellscript-curl.sh)**
  * **[Httpie](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-shellscript-example/auth-shellscript-httpie.sh)**
  * **[wget](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-shellscript-example/auth-shellscript-wget.sh)**

Caso você seja um desenvolvedor em uma linguagem que não está listada nos exemplos acima de autenticação, crie uma nova issue no repositório que será analisado e gerado um exemplo com a linguagem de sua preferência. :]
