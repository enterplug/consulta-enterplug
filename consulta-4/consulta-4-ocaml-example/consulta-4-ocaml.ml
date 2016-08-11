open Cohttp_lwt_unix
open Cohttp
open Lwt

let uri = Uri.of_string "http://186.249.34.34/api/consulta" in
let headers = Header.init ()
  |> fun h -> Header.add h "content-type" "application/json"
  |> fun h -> Header.add h "authorization" "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwOTM2Njg1fQ.o_8klFgjA2EZSzeyIAczCQU6lRWRJZBtkFcJvidtcVo_abWtS8Xis2Qg4C3aArCIYTyZjr3aPLb4LSd9aqzFFQ"
  |> fun h -> Header.add h "cache-control" "no-cache"
in
let body = Cohttp_lwt_body.of_string "{\n    \"codigoProduto\": \"4\",\n    \"tipoConsumidor\": \"F\",\n    \"documentoConsumidor\": \"42924057191\",\n    \"cepConsumidor\": \"14401360\",\n    \"cepOrigem\": \"14401360\",\n    \"codigoEstacaoConsultante\": \"123\"\n}" in

Client.call ~headers ~body `POST uri
>>= fun (res, body_stream) ->
  (* Do stuff with the result *)
