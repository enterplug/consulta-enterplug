package main

import (
	"fmt"
	"strings"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "http://186.249.34.34/consulta/?email=consulta%40enterplug.com.br&senha=consulta&codigoProduto=128&tipoConsumidor=F&documentoConsumidor=42924057191"

	payload := strings.NewReader("-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"username\"\r\n\r\ntom\r\n-----011000010111000001101001--")

	req, _ := http.NewRequest("GET", url, payload)

	req.Header.Add("content-type", "multipart/form-data; boundary=---011000010111000001101001")
	req.Header.Add("authorization", "Basic ZW50ZXJwbHVnOnBsdWdlbnRlcg==")
	req.Header.Add("cache-control", "no-cache")
	req.Header.Add("postman-token", "26d9e432-14ce-a117-2006-3b09e443e2ef")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
