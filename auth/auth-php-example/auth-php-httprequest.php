<?php

$request = new HttpRequest();
$request->setUrl('http://186.249.34.34/auth');
$request->setMethod(HTTP_METH_POST);

$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'content-type' => 'application/json'
));

$request->setBody('{
    "email": "consulta@enterplug.com.br",
    "password": "consulta"
}');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
