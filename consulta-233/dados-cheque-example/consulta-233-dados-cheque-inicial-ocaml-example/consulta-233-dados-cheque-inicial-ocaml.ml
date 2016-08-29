open Cohttp_lwt_unix
open Cohttp
open Lwt

let uri = Uri.of_string "http://186.249.34.34/api/consulta" in
let headers = Header.init ()
  |> fun h -> Header.add h "content-type" "application/json"
  |> fun h -> Header.add h "authorization" "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwOTM2Njg1fQ.o_8klFgjA2EZSzeyIAczCQU6lRWRJZBtkFcJvidtcVo_abWtS8Xis2Qg4C3aArCIYTyZjr3aPLb4LSd9aqzFFQ"
  |> fun h -> Header.add h "cache-control" "no-cache"
in
let body = Cohttp_lwt_body.of_string "{\n    \"codigoProduto\": \"233\",\n    \"tipoConsumidor\": \"F\",\n    \"documentoConsumidor\": \"11111111111\",\n    \"dataNascimentoRg\": \"1938-01-23T00:00:00\",\n    \"telefoneConsultar\": {\n        \"ddd\": \"11\",\n        \"numero\": \"35496800\"\n    },\n    \"cepConsumidor\": \"04003010\",\n    \"utilizaCMC7\": \"false\",\n    \"bancoChequeInicial\": \"756\",\n    \"agenciaChequeInicial\": \"4084\",\n    \"contaCorrenteChequeInicial\": \"51999\",\n    \"digitoContaCorrenteChequeInicial\": \"2\",\n    \"numeroChequeInicial\": \"1\",\n    \"digitoChequeInicial\": \"9\",\n    \"quantidadeCheque\": \"1\",\n    \"chequeDetalhado\": [\n    {\n        \"numero\": \"1\",\n        \"digito\": \"9\",\n        \"dataDeposito\": \"2016-08-11T00:00:00\",\n        \"valor\": \"100\"\n    }],\n    \"cepOrigem\": \"04003010\",\n    \"codigoEstacaoConsultante\": \"123\"\n}" in

Client.call ~headers ~body `POST uri
>>= fun (res, body_stream) ->
  (* Do stuff with the result *)
