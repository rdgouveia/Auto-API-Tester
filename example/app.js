/* É necessário criar o diretorio "data" com o arquivo "data.json" com as 
informações, no padrão do arquivo de teste */

// Importação das duas funções necessárias para iniciar os testes
const { initTest, defineResume } = require("../tester");

/*const com os status que serão salvos no arquivo de resumo. Lembrando que 
qualquer outro status que não seja os presentes nessa lista, será salvo como 
"demais status"*/
const myStatus = {
  200: 0,
  400: 0,
  404: 0,
  418: 0,
  500: 0,
};

// Chamada da função que define quais status serão salvos no resumo
defineResume(myStatus);

// Chamada da função que inicia os testes
initTest(2, true, 7200);
