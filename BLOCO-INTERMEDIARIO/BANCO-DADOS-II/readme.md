# ORM - Prisma

## Sumário

- 1. [ORM e Prisma](#orm-prisma)
- 2. [Iniciando um projeto NodeJS com Typescript](#projeto-node-ts)
- 3. [Iniciando uma Api com Express](#iniciando-api-express)
- 4. [Configurando o PrismaORM](#config-prisma)
- 5. [Estrutura do projeto](#estrutura-projeto)

## 1. <a name='ORM_Prisma'></a>ORM - Prisma

**ORMs (Object-Relational Mappers)** são ferramentas que permitem os desenvolvedores interagir com **bancos de dados relacionais** utilizando **objetos e classes** no código, em vez de escrever consultas SQL diretamente.

O **PrismaORM** é um **Object-Relational Mapper (ORM)** moderno para Node.js e TypeScript que simplifica o trabalho com **bancos de dados relacionais**. Ele oferece:

- `Tipagem automática:` Gera tipos TypeScript com base nos modelos de dados, o que aumenta a segurança e eficiência no desenvolvimento.

- `Migrações de banco de dados:` Permite versionar e gerenciar alterações na estrutura do banco de dados.

- `Consultas eficientes:` Gera consultas SQL otimizadas (ex: `SELECT, INSERT, UPDATE, DELETE`...)

- `Histórico de alterações:` Mantêm um histórico de todas as alterações feitas no banco de dados, ajudando na manutenção (**\_prisma_migrations**).

## 2. <a name='projeto-node-ts'></a>Iniciando um projeto NodeJS com Typescript

## 3. <a name='iniciando-api-express'></a>Iniciando uma Api com Express

## 4. <a name='config-prisma'></a>Configurando o Prisma

## 5. <a name='estrutura-projeto'></a>Estrutura do projeto

Considerado uma **arquitetura modular** ou **arquitetura em camadas**.

### Estrutura de Pastas

```
  /prisma
  ├── /migrations
  └── schema.prisma
  /src
  ├── /controllers
  ├── /middlewares
  ├── /routes
  ├── /database
  ├── /utils
  ├── /types
  └── server.ts
```

### Explicação

- **prisma**: Contém os arquivos de configuração e o esquema do Prisma, que define os modelos de dados e as migrações do banco de dados.

- **src**: Diretório principal do código-fonte da aplicação.

  - **controllers**: Contém a lógica de controle da aplicação, onde as funções que manipulam as requisições HTTP e interagem com os modelos de dados são definidas.

  - **middlewares**: Armazena funções intermediárias que podem modificar requisições e respostas antes que cheguem aos controladores, como autenticação e validação de dados.

  - **routes**: Define as rotas da API, mapeando URLs específicas para funções nos controladores.

  - **database**: Contém a configuração de conexão e inicialização do banco de dados, além de interações diretas com o Prisma.

  - **utils**: Um local para funções utilitárias e auxiliares que podem ser reutilizadas em diferentes partes da aplicação.

  - **types**: Armazena definições de tipos TypeScript personalizados, ajudando a manter a tipagem em todo o projeto.

  - **server.ts**: O ponto de entrada da aplicação, onde o servidor é configurado e iniciado, incluindo a configuração de middleware e rotas.
