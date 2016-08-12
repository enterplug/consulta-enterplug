open Cohttp_lwt_unix
open Cohttp
open Lwt

let uri = Uri.of_string "http://186.249.34.34/api/consulta" in
let headers = Header.init ()
  |> fun h -> Header.add h "content-type" "application/json"
  |> fun h -> Header.add h "authorization" "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcxMDk0ODAyfQ.7sFvaqTEg4802WcRk1OoOc7Ao3YYmc5g7jENqoc8glae0m6PoJyOs-FMSJ_Bs1Tzs8DrMgJPFxx0Mx5COQgzDw"
  |> fun h -> Header.add h "cache-control" "no-cache"
in
let body = Cohttp_lwt_body.of_string "{\n    \"codigoProduto\": \"331\",\n    \"tipoConsumidor\": \"F\",\n    \"documentoConsumidor\": \"11111111111\",\n    \"dataNascimentoRg\": \"1938-01-23T00:00:00\",\n    \"cepConsumidor\": \"04003010\",\n    \"cepOrigem\": \"04003010\",\n    \"codigoEstacaoConsultante\": \"123\"\n}" in

Client.call ~headers ~body `POST uri
>>= fun (res, body_stream) ->
  (* Do stuff with the result *)
