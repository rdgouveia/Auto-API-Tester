# Auto API Tester

Simples, eficiente, funcional 😊 ~~talvez seja tudo isso~~

### Por que desenvolver o Auto API Tester?

O motivo foi bem simples, eu previsava fazer um teste de stress em uma API no trabalho e resolvi desenvolver meu próprio testador invés de usar um que já existia! 😉

### Para o que serve? 🤔

Você poderá fazer requisições com o interválo de tempo que for mais conveniente pra você, tendo logs completos de cada requisição e que poderá durar o tempo que você precisar!

### Como utilizar

- Clonar o repositório para seu máquina
- Dentro do repositório do projeto, instalar as dependências do projeto com o comando "npm i" ou "yarn"
- Dentro da parte do projeto, criar uma pasta com o nome de sua preferência para conter os seguintes arquivos:

#### Arquivo "data.json" no seguinte formato:

```json
{
  "auth": {
    "url": "https://myauthendpoint/token",
    "method": "POST",
    "headers": {
      "content-type": "application/x-www-form-urlencoded"
    },
    "params": {
      "grant_type": "myGrantType",
      "client_id": "myClientId",
      "client_secret": "myClientSecret",
      "scope": "myscope"
    }
  },
  "api": {
    "url": "https://myapiendpoint/mypath",
    "headers": {
      "content-type": "application/json"
    },
    "method": "GET"
  },
  "params": [
    {
      "param1": "value 1",
      "param2": "value 2"
    },
    {
      "param1": "value 3",
      "param2": "value 4"
    },
    {
      "param1": "value 5",
      "param2": "value 6"
    }
  ]
}
```

Vamos por partes

- "auth" irá conter as informações para gerar um token de autenticação para a API que você quer testar (Caso não seja necessário um token de autenticação, não é necessário criar esse objeto no arquivo)
- "api" irá conter as informações para a chamada da API que você deseja testar (Qualquer configuração que seja suportada pelo Axios pode ser utilizada, veja a documentação do [Axios](https://github.com/axios/axios)).
- "params" existe caso você queira utilizar mais de uma massa de dados para fazer suas requisições. "params" deve ser um array que irá conter um ou mais objetos com os parâmetros e valores para serem utilizados na requisição.

#### Arquvio "_anyName_.js" no seguinte formato:

```js
const { initTest, defineResume } = require("../tester");

const myStatus = {
  200: 0,
  400: 0,
  404: 0,
  418: 0,
  500: 0,
};

const jobConfig = {
  token: true,
  rule: 2,
  time: 60,
  concurrency: 2,
};

defineResume(myStatus);

initTest(jobConfig);
```

Lá vamos nós novamente...

- Primeiramente importe as funções "initTest" e "defineResume", elas são a base do funcionamento dos testes.
- "myStatus" é uma constante que contém os status code que você quer que sejam salvos no seu resumo.
- A função "defineResume" é a função que irá definir quais status serão contabilizados no resumo das requisições, por padrão serão salvos todos os status code, ao menos todos os documentados 😅 (Documentação de [HTTP status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status))
- A função "initTest" será a responsável por iniciar os testes. Ela recebe uma parâmetro que é um objeto com os seguintes itens:
  - **token**: Que é um boolean indicando se será necessário ou não a geração de um token para autenticar a requisição da API (Por padrão é false)
  - **rule**: Que será o intervalo de tempo entre cada execução da rotina (Por padrão é 1 segundo)
  - **time**: Que é o periodo de tempo em que o teste estará sendo executado (Por padrão é 60 minutos)
  - **concurrency**: É o basicamente quantas requisições serão feitas simultaneamente no intervalo indicado, ou seja, se o valor foi 2 e o rule for 1, serão feitas duas requisições por segundo (Por padrão é 1)
- **É NECESSÁRIO EXECUTAR AS DUAS FUNÇÕES PARA O FUNCIONAMENTO DO TESTADOR, NESSA MESMA ORDEM**
- Execute o seu arquivo js e veja funcionar... Ou não 😅
- Para delsgiar a execução antes do tempo estimado, basta utilizar o bom e velho "Ctrl+C"

### Issues e Pull Requests são bem vindos. Façam bom proveito.

~~Se alguém quiser escrever a documentação em inglês ou melhorar essa, vou gostar também~~ 😎
~~Não sei usar emoji direito~~
