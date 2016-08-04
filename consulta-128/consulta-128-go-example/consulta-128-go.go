package main

import (
	"fmt"
	"strings"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "http://186.249.34.34/api/consulta"

	payload := strings.NewReader("{\n    \"codigoProduto\": \"4\",\n    \"tipoConsumidor\": \"F\",\n    \"documentoConsumidor\": \"42012644830\",\n    \"telefoneConsultar\": {\n        \"ddd\": \"16\",\n        \"numero\": \"999999999\"\n    },\n    \"cepConsumidor\": \"14401-360\",\n    \"cepOrigem\": \"14401-360\",\n    \"codigoEstacaoConsultante\": \"123\"\n}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoZW5yaXF1ZUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwMzIxNDQ4fQ.b6Qsb9jl3mkO7pMKDiy_A4fLkVQcK_YGEOZgzP8pMi38K0zxXtpOvRBKpujoO0iHXquVpoKS98kcvd5GJGloeA")
	req.Header.Add("content-type", "application/json")
	req.Header.Add("cache-control", "no-cache")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
