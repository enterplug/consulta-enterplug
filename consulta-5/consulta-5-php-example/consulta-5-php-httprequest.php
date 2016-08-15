<?php

$request = new HttpRequest();
$request->setUrl('http://186.249.34.34/api/consulta');
$request->setMethod(HTTP_METH_POST);

$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'authorization' => 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcxMzUyMTk2fQ.0gmJeaAXkAXKU9-Dc0Ke7kXp1mytbIf9A3wf59Hvzz_UBxzXZSpt9H93Y-ITemY9KmekMEBO5gmezVm5hSGPHg',
  'content-type' => 'application/json'
));

$request->setBody('{
    "codigoProduto": "5",
    "tipoConsumidor": "J",
    "documentoConsumidor": "02117943000124",
    "telefoneConsultar": {
    "ddd": "16",
    "numero": "999999999"
    },
    "cepConsumidor": "04003010",
    "cepOrigem": "04003010",
    "codigoEstacaoConsultante": "123"
}');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
