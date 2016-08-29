<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://186.249.34.34/api/consulta",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\n    \"codigoProduto\": \"15\",\n    \"tipoConsumidor\": \"F\",\n    \"documentoConsumidor\": \"11111111111\",\n    \"dataNascimentoRg\": \"1938-01-23T00:00:00\",\n    \"telefoneConsultar\": {\n        \"ddd\": \"11\",\n        \"numero\": \"35496800\"\n    },\n    \"cepConsumidor\": \"04003010\",\n    \"utilizaCMC7\": \"false\",\n    \"bancoChequeInicial\": \"756\",\n    \"agenciaChequeInicial\": \"4084\",\n    \"contaCorrenteChequeInicial\": \"51999\",\n    \"digitoContaCorrenteChequeInicial\": \"2\",\n    \"numeroChequeInicial\": \"1\",\n    \"digitoChequeInicial\": \"9\",\n    \"quantidadeCheque\": \"1\",\n    \"chequeDetalhado\": [\n    {\n        \"numero\": \"1\",\n        \"digito\": \"9\",\n        \"dataDeposito\": \"2016-08-11T00:00:00\",\n        \"valor\": \"100\"\n    }],\n    \"cepOrigem\": \"04003010\",\n    \"codigoEstacaoConsultante\": \"123\"\n}",
  CURLOPT_HTTPHEADER => array(
    "authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwOTM2Njg1fQ.o_8klFgjA2EZSzeyIAczCQU6lRWRJZBtkFcJvidtcVo_abWtS8Xis2Qg4C3aArCIYTyZjr3aPLb4LSd9aqzFFQ",
    "cache-control: no-cache",
    "content-type: application/json",
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
