<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://186.249.34.34/consulta/?email=consulta%40enterplug.com.br&senha=consulta&codigoProduto=4&tipoConsumidor=F&documentoConsumidor=42924057191",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "authorization: Basic ZW50ZXJwbHVnOnBsdWdlbnRlcg==",
    "cache-control: no-cache",
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
