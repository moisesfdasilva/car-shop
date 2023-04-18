# Car Shop

## Sobre o Projeto
Aplicação desenvolvida para disponibilizar uma API com funcionalidades de criar, ler, modificar e deletar informações relativas a venda de carros e motos.

![trybe-futebol-clube-1](./app/trybe-futebol-clube-1.png)
![trybe-futebol-clube-2](./app/trybe-futebol-clube-2.png)
![trybe-futebol-clube-3](./app/trybe-futebol-clube-3.png)

## Tecnologias e Ferramentas empregadas
Node.js;
TypeScript;
Express;
Mongoose;
Chai;
MongoDB; e
Docker.

## Status do Projeto
Aplicação em funcionamento.

## Acesso à Aplicação
### Instalação e Execução
A. Entrar no diretório app:

  $ cd app

B. Iniciada pelo Docker através do comando:
  
  $ docker compose up

C. Serão iniciados os dois containers:
  1. container docker db, com o banco de dados em MongoDB; e 
  2. container docker backend, com o backend em Node.js.

D. Acessar a API, nas seguintes rotas:
  i. Post, em http://localhost:3001/cars,
  <p>com body { model: string, year: number, color: string, status: boolean, buyValue: number, doorsQty: number, seatsQty: number }</p>
  
  2. Get, em http://localhost:3001/cars, com body...
  3. Get, em http://localhost:3001/cars/:id, com body...
  4. Put, em http://localhost:3001/cars/:id, com body...
  5. Delete, em http://localhost:3001/cars/:id, com body..
  
  6. Post, em http://localhost:3001/motorcycles, com body...
  7. Get, em http://localhost:3001/motorcycles, com body...
  8. Get, em http://localhost:3001/motorcycles/:id, com body...
  9. Put, em http://localhost:3001/motorcycles/:id, com body...
  10. Delete, em http://localhost:3001/motorcycles/:id, com body..


## Contribuintes
|Nome|GitHub|
| -------- | -------- |
|Trybe|https://github.com/trybe-tech-ops|
|Moisés Fernandes|https://github.com/moisesfdasilva|

## Contato
[GitHub: Repositório-car-shop](https://github.com/moisesfdasilva/car-shop)
