<?php

$client = new http\Client;
$request = new http\Client\Request;

$body = new http\Message\Body;
$body->append('{
    "email": "consulta@enterplug.com.br",
    "password": "consulta"
}');

$request->setRequestUrl('http://186.249.34.34/auth');
$request->setRequestMethod('POST');
$request->setBody($body);

$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'content-type' => 'application/json'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
