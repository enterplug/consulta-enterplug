open Cohttp_lwt_unix
open Cohttp
open Lwt

let uri = Uri.of_string "http://186.249.34.34/consulta/?email=consulta%40enterplug.com.br&senha=consulta&codigoProduto=4&tipoConsumidor=F&documentoConsumidor=42924057191" in
let headers = Header.init ()
  |> fun h -> Header.add h "authorization" "Basic ZW50ZXJwbHVnOnBsdWdlbnRlcg=="
  |> fun h -> Header.add h "cache-control" "no-cache"
in

Client.call ~headers `GET uri
>>= fun (res, body_stream) ->
  (* Do stuff with the result *)
