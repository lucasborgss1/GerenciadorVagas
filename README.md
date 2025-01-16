# Gerenciador de Vagas

Este projeto tem como objetivo fornecer uma solução simples e eficiente para o gerenciamento de vagas de emprego. Ele inclui uma Web API construída com C# e .NET para o back-end e um front-end desenvolvido com React TypeScript utilizando **Vite** para bundling e **Yarn** para gerenciamento de dependências.

## Tecnologias Utilizadas

- **Back-end:**  
  - C# com .NET Core
  - SQL Server
  - Web API com endpoints para o CRUD de vagas

- **Front-end:**  
  - React com TypeScript
  - HTML, CSS e JS
  - Vite (para bundling)
  - Yarn (para gerenciamento de dependências)

## Funcionalidades

A aplicação permite as seguintes operações relacionadas ao gerenciamento de vagas:

1. **Listar todas as vagas**  
   - Endpoint para recuperar todas as vagas armazenadas no banco de dados.
   
2. **Criar novas vagas**  
   - Formulário para criação de novas vagas com o título e status.

3. **Editar uma vaga**  
   - Permite editar o título e o status de uma vaga.

4. **Excluir uma vaga**  
   - Opção para remover uma vaga do banco de dados.

![API](https://github.com/user-attachments/assets/5cc8c859-d114-45e8-b965-4465c6128507)



## Estrutura do Banco de Dados

A tabela **Vagas** foi criada com as seguintes colunas:

- **Id**: Identificador único da vaga (Auto incremento).
- **Title**: Título da vaga.
- **Status**: Status da vaga, com valores possíveis 'Finalizada' ou 'Aberta'.
- **Created_at**: Data de criação da vaga.
- **Updated_at**: Data da última atualização da vaga (atualiza automaticamente na modificação).

## Como Rodar o Projeto

### 1. Back-end (Web API com C# e .NET)
- Certifique-se de que o **SQL Server** está instalado e funcionando.
- Importe o projeto do back-end no **Visual Studio**.
- Execute a aplicação para iniciar a API.
- Configure a conexão com o banco de dados no arquivo `appsettings.json`.

### 2. Front-end (React com TypeScript e Vite)
- Importe o projeto do front-end no **Visual Studio Code**.
- Instale as dependências com o comando:
  ```bash
  yarn install
  yarn dev
