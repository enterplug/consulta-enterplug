<?php

$request = new HttpRequest();
$request->setUrl('http://186.249.34.34/api/consulta');
$request->setMethod(HTTP_METH_POST);

$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'authorization' => 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwOTM2Njg1fQ.o_8klFgjA2EZSzeyIAczCQU6lRWRJZBtkFcJvidtcVo_abWtS8Xis2Qg4C3aArCIYTyZjr3aPLb4LSd9aqzFFQ',
  'content-type' => 'application/json'
));

$request->setBody('{
    "codigoProduto": "332",
    "tipoConsumidor": "J",
    "documentoConsumidor": "02117943000124",
    "cepOrigem": "14401-360",
    "codigoEstacaoConsultante": "123"
}');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
