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

/**
 * @param {boolean} token referente se será necessário gerar token para validar as requisições (Padrão false)
 * @param {number} rule Referente ao intervalo entre cada job (Padrão 1 segundo)
 * @param {number} time Referente ao tempo que será conduzido os teste em minutos (Padrão 60 minutos)
 * @param {number} concurrency Referente a quantidade de requisições que será feita por segundo (Padrão 1)
 */
const jobConfig = {
  token: true,
  rule: 2,
  time: 60,
  concurrency: 2,
};

// Chamada da função que define quais status serão salvos no resumo
defineResume(myStatus);

// Chamada da função que inicia os testes
initTest(jobConfig);
