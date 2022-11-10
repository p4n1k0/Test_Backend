## Boas vindas ao repositório do Teste do Processo Seletivo Backend!
por [Gabriel Tarick](https://www.linkedin.com/in/gabriel-tarick/)

## Habilidades

- Criação de um banco de dados relacional utilizando o MySQL;
- Testes que atendem os requisitos;
- Rotas utilizando uma abordagem de desenvolvimento orientado a testes.

---

  <strong>👨‍💻 O que foi desenvolvido</strong><br />  
<details>
  Construção de uma aplicação de rotas (usuarios, enderecos) em que será possível cadastrar, visualizar, pesquisar, editar e excluir informações. Para isso foi feito:
  1. Desenvolvimento de uma API de um `CRUD` (**C**reate, **R**ead, **U**pdate e **D**elete) de usuários e endereços (usuarios, enderecos_usuario);
  2. Desenvolvimento de alguns endpoints que fazem leitura e escrevem em um arquivo utilizando o módulo `express`.

</details>
---

  <strong>:whale: Rodando no Docker vs Localmente</strong><br />
<details>
  
  ## Com Docker
 
  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `teste-backend-api-database-1`.
  - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it teste-backend-api-database-1 bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`

  > Execute a aplicação com `npm start` ou `npm run dev`


  :eyes: **De olho na dica:** 

  A extensão `Remote - Containers` do VS Code é indicada para que você  possa visualizar a aplicação no container Docker direto no VS Code.

  ---
  
  ## Sem Docker
  
  > Instale as dependências [**Caso existam**] com `npm install`

  :eyes: **De olho nas dicas:** 
  1. Para rodar o Teste_Banckend, **obrigatoriamente** você deve ter o `node` instalado em seu computador.
  2. O avaliador espera que a versão do `node` utilizada seja a 16.

</details>


<strong>‼️ Para clonar o repositório, basta</strong><br />
<details>
  - `git clone git@github.com:p4n1k0/Test_Backend.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd teste-backend-api`  

</details>

<strong>🔁 Live reload</strong><br />
<details>

  Use o [Nodemon](https://nodemon.io) para monitorar as mudanças nos arquivos e reiniciar o servidor automaticamente.

  Este teste já vem com as dependências relacionadas ao _nodemon_ configuradas no arquivo `package.json`.

  Para iniciar o servidor em modo de desenvolvimento basta executar o comando `npm run dev`. Este comando fará com que o servidor reinicie de forma automática ao salvar uma modificação realizada nos arquivos do teste.
</details>

  ### Executando todos os testes
<details>

  Para poder executar os testes, inicie a aplicação com `npm run dev`, em seguida, basta executar o comando `npm test` e **todos** os testes serão executados.  

  :warning: **Importante:** os comandos de testes podem ser executados tanto no terminal do seu computador quanto do **_Docker_**.
</details>

<strong>🗣 Me dê feedback sobre o teste!</strong><br />
<details> 
:warning: **O avaliador automático não necessariamente avalia o teste na ordem em que os requisitos aparecem no arquivo. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

</details>
