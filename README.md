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

Abaixo segue os exemplos de autenticação em diversas linguagens de programação:

* **[C](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-c-example/auth-c-libcurl.c)**
* **[C#](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-csharp-example/auth-csharp-restsharp.cs)**
  * **[RestSharp](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-csharp-example/auth-csharp-restsharp.cs)**
* **[Python](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-python-example/)**
  * **[Http.Client]()
* Java
* Javascript
  * Node
  * XHR
  * JQuery
* Ruby
* GO
* Shell Script


Caso você seja um desenvolvedor em uma linguagem que não está listada nos exemplos acima de autenticação, crie uma nova issue no repositório que será analisado e gerado um exemplo com a linguagem de sua preferência. :]
