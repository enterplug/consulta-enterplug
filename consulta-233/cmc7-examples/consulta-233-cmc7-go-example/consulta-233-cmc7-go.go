package main

import (
	"fmt"
	"strings"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "http://localhost:8080/api/consulta"

	payload := strings.NewReader("{\n    \"codigoProduto\": \"233\",\n    \"tipoConsumidor\": \"F\",\n    \"documentoConsumidor\": \"11111111111\",\n    \"dataNascimentoRg\": \"1938-01-23T00:00:00\",\n    \"telefoneConsultar\": {\n        \"ddd\": \"11\",\n        \"numero\": \"35496800\"\n    },\n    \"cepConsumidor\": \"04003010\",\n    \"utilizaCMC7\": \"true\",\n    \"cmc71ChequeInicial\": \"34140848\",\n    \"cmc72ChequeInicial\": \"0000000015\",\n    \"cmc73ChequeInicial\": \"800000519991\",\n    \"quantidadeCheque\": \"1\",\n    \"chequeDetalhado\": [\n    {\n        \"numero\": \"1\",\n        \"digito\": \"9\",\n        \"dataDeposito\": \"2016-08-11T00:00:00\",\n        \"valor\": \"100\"\n    }],\n    \"cepOrigem\": \"04003010\",\n    \"codigoEstacaoConsultante\": \"123\"\n}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("content-type", "application/json")
	req.Header.Add("authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwODU3ODQwfQ.g7E2ABhES7yQXoIfpBTv30yDjal07EEI9i9Tu-d1Jjksxpv1UseaZpbjfqeNKF3pi_-xeX5ihN2EITPg184oaA")
	req.Header.Add("cache-control", "no-cache")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
