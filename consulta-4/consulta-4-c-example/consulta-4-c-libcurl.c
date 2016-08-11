CURL *hnd = curl_easy_init();

curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "POST");
curl_easy_setopt(hnd, CURLOPT_URL, "http://186.249.34.34/api/consulta");

struct curl_slist *headers = NULL;
headers = curl_slist_append(headers, "cache-control: no-cache");
headers = curl_slist_append(headers, "authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwOTM2Njg1fQ.o_8klFgjA2EZSzeyIAczCQU6lRWRJZBtkFcJvidtcVo_abWtS8Xis2Qg4C3aArCIYTyZjr3aPLb4LSd9aqzFFQ");
headers = curl_slist_append(headers, "content-type: application/json");
curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);

curl_easy_setopt(hnd, CURLOPT_POSTFIELDS, "{\n    \"codigoProduto\": \"4\",\n    \"tipoConsumidor\": \"F\",\n    \"documentoConsumidor\": \"42924057191\",\n    \"cepConsumidor\": \"14401360\",\n    \"cepOrigem\": \"14401360\",\n    \"codigoEstacaoConsultante\": \"123\"\n}");

CURLcode ret = curl_easy_perform(hnd);
