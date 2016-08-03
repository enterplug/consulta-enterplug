CURL *hnd = curl_easy_init();

curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "POST");
curl_easy_setopt(hnd, CURLOPT_URL, "http://186.249.34.34/auth");

struct curl_slist *headers = NULL;
headers = curl_slist_append(headers, "cache-control: no-cache");
headers = curl_slist_append(headers, "content-type: application/json");
curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);

curl_easy_setopt(hnd, CURLOPT_POSTFIELDS, "{\n    \"email\": \"consulta@enterplug.com.br\",\n    \"password\": \"consulta\"\n}");

CURLcode ret = curl_easy_perform(hnd);
