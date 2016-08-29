var request = require("request");

var options = { method: 'POST',
  url: 'http://186.249.34.34/api/consulta',
  headers: {
     'cache-control': 'no-cache',
     'authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25zdWx0YUBlbnRlcnBsdWcuY29tLmJyIiwiZXhwIjoxNDcwOTM2Njg1fQ.o_8klFgjA2EZSzeyIAczCQU6lRWRJZBtkFcJvidtcVo_abWtS8Xis2Qg4C3aArCIYTyZjr3aPLb4LSd9aqzFFQ',
     'content-type': 'application/json' },
  body:
   { codigoProduto: '15',
     tipoConsumidor: 'F',
     documentoConsumidor: '11111111111',
     dataNascimentoRg: '1938-01-23T00:00:00',
     telefoneConsultar: { ddd: '11', numero: '35496800' },
     cepConsumidor: '04003010',
     utilizaCMC7: 'false',
     bancoChequeInicial: '756',
     agenciaChequeInicial: '4084',
     contaCorrenteChequeInicial: '51999',
     digitoContaCorrenteChequeInicial: '2',
     numeroChequeInicial: '1',
     digitoChequeInicial: '9',
     quantidadeCheque: '1',
     chequeDetalhado:
      [ { numero: '1',
          digito: '9',
          dataDeposito: '2016-08-11T00:00:00',
          valor: '100' } ],
     cepOrigem: '04003010',
     codigoEstacaoConsultante: '123' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
