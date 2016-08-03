open Cohttp_lwt_unix
open Cohttp
open Lwt

let uri = Uri.of_string "http://186.249.34.34/auth" in
let headers = Header.init ()
  |> fun h -> Header.add h "content-type" "application/json"
  |> fun h -> Header.add h "cache-control" "no-cache"
in
let body = Cohttp_lwt_body.of_string "{\n    \"email\": \"consulta@enterplug.com.br\",\n    \"password\": \"consulta\"\n}" in

Client.call ~headers ~body `POST uri
>>= fun (res, body_stream) ->
  (* Do stuff with the result *)
