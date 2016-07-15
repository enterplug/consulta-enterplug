package main

import (
	"fmt"
	"strings"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "http://186.249.34.34/consulta/?email=henrique%40enterplug.com.br&senha=enterplug&codigoProduto=4&tipoConsumidor=F&documentoConsumidor=42924057191"

	req, _ := http.NewRequest("GET", url, payload)

	req.Header.Add("content-type", "multipart/form-data; boundary=---011000010111000001101001")
	req.Header.Add("authorization", "Basic ZW50ZXJwbHVnOnBsdWdlbnRlcg==")
	req.Header.Add("cache-control", "no-cache")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
