<p align=center>
    <img src="./assets-READMI/knex.png">
</p>

---

# Descrição

*Projeto realizado com o intuito de aprender banco de dados POSTGRESQL com a utilização do knex.js, juntamente com o node.js*

## Pacotes utilizados

*Utilize npm i antes de cada nome para instalar.*

- express
- pg
- nodemon
- knex

# Postgresql

- Relations é  mesmo que tabela em sql.

```bash
psql -U postgres
// 
//criando DATABASE
CREATE DATABASE knex_test

// conectando na DATABASE
\c knex_test

//criando a tabela

CREATE TABLE users(
	id serial unique,
	name text not null
);

// \d navegar nas tabelas
\d users

//serial == incremental

//inserindo na tabela linha name

INSERT INTO users (name) values ('gledson');

// selecionando tudo de usuarios
SELECT * FROM users;

//atualizando uma informação
UPDATE users SET name = 'gledson' WHERE id = '1';

//inseridno na tabela coluna e valor
INSERT INTO projects (user_id, title) values ('1', 'Meu Projeto');

// inserindo uma tabela com outra (adicionando nova coluna)
knex_test=# SELECT projects.*, users.name
knex_test-# FROM projects
knex_test-# JOIN users ON projects.user_id = users.id;
```


# Project

- [x]  config project

    ```bash

    npm init -y
    //instalar como dependencia
    npm i  nodemon -D
    npm i knex pg express

    ```

    - [x]  config knex

        ```bash
        //iniciando
        npx knex init

        ```

        - [x]  database
    - [x]  migrations

        ```bash
        npx knex migrate:make create_table_users
        npx knex migrate:latest

        npx knex seed:make 001_users
        npx knex seed:run
        ```

- [x]  Preparando rotas
    - [x]  Separar pastas no projeto(controllers)
    - [x]  Server apenas para receber as rotas que é outro arquivo
    - [x]  function async:  delete, put, get, post
    - [x]  rotas: delete, put, get, post

- [x]  Criar nova migrate:make

Usar knex seed:run —specific "nome do arquivo", para nao deletar outros seed sem querer

- [x]  Join na tabela
- [x]  Criar rota de projects
    - [x]  definir rotas dinamicas
    - [x]  com e sem query params
- [x]  Definir get do projects para mostrar a cada 5 users_id

No header eu posso me comunicar com o corpo da minha requisiçao e obter dados

- [x]  soft delete

    Parecer que deletou, mas nao deletou do banco e dados, raiz, é possivel acessar o dado no banco de dados, porem na aplicação não.

- [x]  Productures & Triggers(update_at)