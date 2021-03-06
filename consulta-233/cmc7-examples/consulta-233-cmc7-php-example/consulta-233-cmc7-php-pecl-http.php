<?php

$client = new http\Client;
$request = new http\Client\Request;

$body = new http\Message\Body;
$body->append('{
    "codigoProduto": "233",
    "tipoConsumidor": "F",
    "documentoConsumidor": "11111111111",
    "dataNascimentoRg": "1938-01-23T00:00:00",
    "telefoneConsultar": {
        "ddd": "11",
        "numero": "35496800"
    },
    "cepConsumidor": "04003010",
    "utilizaCMC7": "true",
    "cmc71ChequeInicial": "34140848",
    "cmc72ChequeInicial": "0000000015",
    "cmc73ChequeInicial": "800000519991",
    "quantidadeCheque": "1",
    "chequeDetalhado": [
    {
        "numero": "1",
        "digito": "9",
        "dataDeposito": "2016-08-11T00:00:00",
        "valor": "100"
    }],
    "cepOrigem": "04003010",
    "codigoEstacaoConsultante": "123"
}');

$request->setRequestUrl('http://localhost:8080/api/consulta');
$request->setRequestMethod('POST');
$request->setBody($body);

$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'authorization' => 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwODU3ODQwfQ.g7E2ABhES7yQXoIfpBTv30yDjal07EEI9i9Tu-d1Jjksxpv1UseaZpbjfqeNKF3pi_-xeX5ihN2EITPg184oaA',
  'content-type' => 'application/json'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
