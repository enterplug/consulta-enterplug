<?php

$client = new http\Client;
$request = new http\Client\Request;

$body = new http\Message\Body;

$request->setRequestUrl('http://186.249.34.34/consulta/');
$request->setRequestMethod('GET');
$request->setBody($body);

$request->setQuery(new http\QueryString(array(
  'email' => 'henrique@enterplug.com.br',
  'senha' => 'enterplug',
  'codigoProduto' => '4',
  'tipoConsumidor' => 'F',
  'documentoConsumidor' => '42924057191'
)));

$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'authorization' => 'Basic ZW50ZXJwbHVnOnBsdWdlbnRlcg=='
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
