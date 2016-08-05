wget --quiet \
  --method POST \
  --header 'content-type: application/json' \
  --header 'cache-control: no-cache' \
  --body-data '{\n    "email": "consulta@enterplug.com.br",\n    "password": "consulta"\n}' \
  --output-document \
  - http://186.249.34.34/auth
