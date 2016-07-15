<?php

$request = new HttpRequest();
$request->setUrl('http://186.249.34.34/consulta/');
$request->setMethod(HTTP_METH_GET);

$request->setQueryData(array(
  'email' => 'consulta@enterplug.com.br',
  'senha' => 'consulta',
  'codigoProduto' => '4',
  'tipoConsumidor' => 'F',
  'documentoConsumidor' => '42924057191'
));

$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'authorization' => 'Basic ZW50ZXJwbHVnOnBsdWdlbnRlcg==',
));

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
