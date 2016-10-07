<p align="center">
  <img src="http://enterplug.com.br/wp-content/uploads/2013/06/logo-Enter2.jpg">
</p>

<h1 align="center">Consulta</h1>

<p align="center">
  Repositório de códigos fontes, exemplos e manuais da API REST Enter&Plug Consulta.
</p>


## Sumário

1. - **[Autenticação](https://github.com/enterplug/consulta-enterplug#autenticação)**
2. - **[Consulta Cheque(4)](https://github.com/enterplug/consulta-enterplug#cheque4)**
3. - **[Consulta Cheque Plus(13)]()**


## Regras de Uso

O código do produto a ser consultado deve sempre ser enviado. A necessidade/obrigatoriedade
dos demais parâmetros depende da configuração do produto consultado;

Para a consulta ao produto ser executada com sucesso, o usuário deve possuir acesso ao produto e também deve possuir acesso de consulta ao produto.

Os dados retornados na consulta variam de acordo com o produto consultado; portanto, todos
os elementos devem ser tratados, pois o resultado da consulta será variável, conforme o
produto consultado. Os elementos configurados em um produto aparecem no retorno de uma
consulta, mesmo que não exista a informação para o documento consultado; nesses situações,
a quantidade do referido é null.

O parâmetro utiliza-CMC7 determina a forma de se informar os cheques para consulta; caso
seja informado (utiliza-CMC7 = true), os três campos que representam o CMC7 devem ser
informados; caso seja informado (utiliza-CMC7 = false), os campos
banco/conta/agencia/numero do cheque inicial devem ser informados; a obrigatoriedade dos
dados depende da configuração do produto. Entretanto, cada conjunto de parametros (CMC7
ou banco/conta/agencia/numero do cheque inicial) são validados em conjunto; sendo assim, se
for informado o banco, por exemplo, será necessário informar os demais parametros
(conta/agencia/numero do cheque inicial). Na lista de cheques detalhados, os dados de cada
cheque informado também serão validados em conjunto.

Algumas informações apresentam um item de resumo; este bloco apresenta a quantidade total
de registros/informações, valor e data da última ocorrência.

Algumas entidades podem obrigar a entrada dos dados de cheques através do CMC7; nesses
casos, ocorrerá erro quando a consulta for executada informando dados do cheque inicial.

## Retorno

Dados obtidos a partir da execução da consulta.

As informações marcadas com * retornam quando são consultados produtos 2 Bureaux.

| Nome da informação | Descrição das informações e dos seus principais atributos/elementos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| data               | Data/Hora da consulta.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| restricao          | Indica se a consulta retornou algum dado que representa restrição de crédito para o consumidor consultado.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| base-inoperante    | Relação das bases de dados inoperantes no momento da consulta.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| consumidor         | Dados do consumidor consultado: consumidor-pessoa-fisica: retorna quando a consulta foi de um CPF:  cpf; nome;  data-nascimento;  nome-pai; nome-mae;  sexo;  estado-civil;  numero-titulo-eleitor;  email;  numero-rg;  estado-rg;  signo;  situacao-cpf;  idade;  endereco;  telefone-residencial;  telefone-celular; telefone-comercial;  fax;  consumidor-pessoa-juridica: retorna quando a consulta foi de um CNPJ:   cnpj;  nome-comercial;  razao-social;  data-fundacao; inscricao-estadual;  valor-capital-social; numero-NIRE-NIRC;  razao-social-anterior;  situacao-cnpj;  situacao-inscricao-estadual;  natureza-juridica;  atividade-economica-principal;  endereco; telefone; fax;  atividade-economica-secundaria.  Os dois elementos nunca retornam ao mesmo tempo. |


## Tabela de Erros
Exceções: Código Retorno - Descrição
00 - Erro interno.
01 - O produto a ser consultado não existe ou está inativo.
02 - CEP de origem inválido.
03 - Código da estação consultante inválido (suporta até 16 caracteres).
04 - Nenhum parametro informado.
05 - Documento de consulta é obrigatório.
06 - Número do CNPJ informado é inválido.
07 - Número do CPF informado é inválido.
08 - Tipo de consumidor inválido.
09 - CEP do consumidor é obrigatório.
10 - CEP do consumidor inválido.
11 - Telefone a ser consultado é obrigatório.
12 - Número do DDD do telefone a ser consultado inválido.
13 - Número do telefone a ser consultado inválido.
14 - Produto não possui insumo opcional.
15 - Insumo opcional informado não existe na configuração do produto.
16 - Cheque inicial informado – informe se utiliza CMC7 ou dados do cheque.
17 - Informe o CMC7 ou o número do cheque inicial.
18 - Dados do cheque inicial (banco/agencia/conta) inválidos.
19 - Obrigatório informar CMC7.
20 - inválido.
21 - Agência inválida.
22 - Número da conta corrente ou dígito inválido.
23 - Dígito da conta corrente inválido.
24 - Número do cheque inicial inválido.
25 - Dígito do cheque inicial inválido.
26 - Quantidade de cheques deve ser informada.
27 - Quantidade de cheques não pode ser maior que 24.
28 - Produto Chequenet – informar no maximo 12 cheques.
29 - Quantidade de cheques detalhados diferente da quantidade de cheques informada.
30 - CMC7 do cheque inicial inválido.
31 - CMC7 não pode ser zero.
32 - Numero do cheque detalhado não pode ser menor que o número do cheque inicial.
33 - Número do cheque detalhado foi informado mais de uma vez.
34 - Número do cheque detalhado inválido.
35 - Dígito do cheque detalhado inválido.
36 - Data de deposito do cheque detalhado deve ser informada.
37 - Data de deposito do cheque detalhado deve ser futura.
38 - Valor do cheque detalhado inválido.
39 - O operador não possui acesso ao produto.
50 - Base externa inoperante no momento; tente novamente (apenas para produtos que
acessam exclusivamente informações externas).
51 - Informações indisponíveis na base externa (apenas para produtos que acessam
exclusivamente informações externas).
52 - Acesso apenas para entidades migradas (quando um operador de entidade replicada tenta consultar via web-service de consulta para entidades migradas).
53 – Obrigatório informar códigos da entidade e associado replicados e o documento
consultante (para web-service de entidades replicadas, quando uma das informações não é
enviada).
54 - Associado replicado informado nao cadastrado (o código do associado replicado passado
por parâmetro não existe no cadastro do SPC Brasil).
55 - Documento do consultante informado inválido.
56 - Documento do consultante informado não corresponde ao cadastro do associado (apenas
para web-service de entidades replicadas).
57 - Acesso temporariamente suspenso, por favor entrar em contato com sua entidade. (cod
670)

## Autenticação

Para efetuar autenticação na API REST de consulta é obrigatório o desenvolvedor informar o email e password para a geração do token
de segurança, o token é indexado no cabeçalho da requisição não obrigando o desenvolvedor autenticar o usuário toda vez que
for efetuar uma nova consulta, o token pode ser armazenado aonde o desenvolvedor achar melhor exemplos: Cookie, localStorage, Session, Banco de dados etc...

### Exemplo de autenticação **[HTTP](https://github.com/enterplug/consulta-enterplug/blob/master/auth/auth-http-example/auth-http.txt)**

```
POST /auth HTTP/1.1
Host: 186.249.34.34
Content-Type: application/json
Cache-Control: no-cache

{
    "email": "consulta@enterplug.com.br",
    "password": "consulta"
}
```

### Exemplo de retorno da autenticação
``` js
{
  "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwNzQ2NjUxfQ.rHGdEo3BVzWiLkJe9CRr8z2zokVmJjgNc85eGr5lHP8MI3oRjD9gC7ZM0_qMaH2s3Btq5XotXYNLffo5BnLo9Q"
}
```

### Exemplo de inserção do header de autorização

É obrigatório em toda consulta efetuada informar o header Authorization na requisição contendo o Bearer e o token gerado através da autenticação do usuário, caso a requisição não contenha o header será gerado uma exceção de Token inválido ou inexistente.

Segue o exemplo abaixo:

``` js
{
  "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoZW5yaXF1ZUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwMzIxNDQ4fQ.b6Qsb9jl3mkO7pMKDiy_A4fLkVQcK_YGEOZgzP8pMi38K0zxXtpOvRBKpujoO0iHXquVpoKS98kcvd5GJGloeA"
}
```


### Exemplo de autenticação em diversas linguagens de programação

Segue o **[manual](https://github.com/enterplug/consulta-enterplug/blob/master/auth/autenticacao.pdf)** e os exemplos de autenticação em diversas linguagens de programação:

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

Caso você seja um desenvolvedor em uma linguagem que não está listada nos exemplos acima de autenticação, crie uma nova issue no repositório que será analisado e gerado um exemplo com a linguagem de sua preferência, caso tenha implementado em uma linguagem não listada acima  :]

## Consultas

* Cheque(4)
* Confirma Pessoa Física(11)
*
* Cheque Plus(128)

### Cheque(4)
Ao efetuar a consulta Cheque(4) o usuário irá obter as seguintes informações através da API REST:

* Dados cadastrais
* Alerta de documentos
* CCF(Cadastro de Emitentes de Cheques sem Fundos)

#### Parâmetros de entrada
* codigoProduto - Campo obrigatório
* tipoConsumidor - Campo obrigatório
* documentoConsumidor - Campo obrigatório
* cepConsumidor - Campo não obrigatório
* cepOrigem - Campo não obrigatório
* codigoEstacaoConsultante - Campo não obrigatório

#### Insumo Opcional
Essa consulta não tem opção de insumo opcional.

#### Exemplo de parâmetros de entrada
``` js
{
    "codigoProduto": "4",
    "tipoConsumidor": "F",
    "documentoConsumidor": "42924057191",
    "cepConsumidor": "14401-360",
    "cepOrigem": "14401-360",
    "codigoEstacaoConsultante": "123"
}
```
