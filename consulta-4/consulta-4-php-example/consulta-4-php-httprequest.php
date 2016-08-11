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
    "codigoProduto": "4",
    "tipoConsumidor": "F",
    "documentoConsumidor": "42924057191",
    "cepConsumidor": "14401360",
    "cepOrigem": "14401360",
    "codigoEstacaoConsultante": "123"
}');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
