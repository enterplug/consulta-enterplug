<?php

$client = new http\Client;
$request = new http\Client\Request;

$body = new http\Message\Body;
$body->append('{
    "codigoProduto": "15",
    "tipoConsumidor": "F",
    "documentoConsumidor": "11111111111",
    "dataNascimentoRg": "1938-01-23T00:00:00",
    "telefoneConsultar": {
        "ddd": "11",
        "numero": "35496800"
    },
    "cepConsumidor": "04003010",
    "utilizaCMC7": "false",
    "bancoChequeInicial": "756",
    "agenciaChequeInicial": "4084",
    "contaCorrenteChequeInicial": "51999",
    "digitoContaCorrenteChequeInicial": "2",
    "numeroChequeInicial": "1",
    "digitoChequeInicial": "9",
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

$request->setRequestUrl('http://186.249.34.34/api/consulta');
$request->setRequestMethod('POST');
$request->setBody($body);

$request->setHeaders(array(
  'postman-token' => 'd1aa95eb-2537-d2da-9dc2-4bc269f22e76',
  'cache-control' => 'no-cache',
  'authorization' => 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwOTM2Njg1fQ.o_8klFgjA2EZSzeyIAczCQU6lRWRJZBtkFcJvidtcVo_abWtS8Xis2Qg4C3aArCIYTyZjr3aPLb4LSd9aqzFFQ',
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
