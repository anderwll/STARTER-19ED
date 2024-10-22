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

**Passo 1:** Iniciar o arquivo `package.json`.

```bash
  npm init -y
```

**Passo 2:** Instalar as dependências de desenvolvimento.

```bash
  npm install -D typescript @types/node ts-node-dev
```

**Passo 3:** Iniciar o arquivo `tsconfig.json`.

```bash
  npx tsc --init
```

**Passo 4:** Alterar os diretórios dentro do arquivo `tsconfig.json`.

```json
  "compilerOptions": {
    "target": "ES2022",
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "exclude": ["node_modules"]
```

**Passo 5:** Adicionar:

- Pasta `src`, diretório principal.
- Arquivo `server.ts`, ponto de entrada da aplicação, onde o servidor é configurado e iniciado.
- Arquivo `.gitignore` conténdo o que **não deve subir** ao **GitHub**, ex: **node_modules, .env, dist**.

```bash
  /src
  ├── server.ts
  .gitignore
```

**Passo 6:** Dentro do arquivo `package.json` adicionar os seguintes scripts.

```json
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only ./src/server.ts",
    "start": "node ./dist/server.js",
    "build": "tsc"
  },
```

## 3. <a name='iniciando-api-express'></a>Iniciando uma Api com Express

**Passo 1:** Instalar as dependências.

**Produção:**

```bash
  npm install express cors
```

**Desenvovimento:**

```bash
  npm install -D @types/express @types/cors dotenv
```

**Passo 2:** Dentro do arquivo `server.ts`, configurar e inicar o servidor express.

```ts
// Imports
import "dotenv/config";
import cors from "cors";
import express, { Request, Response } from "express";

// Criando o servidor com express
const app = express();
const port = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota padrão
app.get("/", (request: Request, response: Response) => {
  response.status(200).json({ mensagem: "Api Ok!" });
});

// Iniciando o servidor
app.listen(port, () => {
  console.log("Servidor rodando na porta", port, "🚀");
});
```

**Passo 3:** Adicionar o arquivo `.env` na raiz do projeto, definindo a `PORT=3000`.

**.env**

```bash
  PORT=3000
```

Adicionar também o arquivo `.env-example` definindo as váriaveis (sem valor, ex: `PORT=`) necessárias para rodar o projeto, facilitando a quem for clonar.

**Passo 4:** Rodar a Api para verificar se tudo está Ok.

```bash
  npm run dev
```

## 4. <a name='config-prisma'></a>Configurando o Prisma

TODO: Implementar passo a passo da configuração inicial do prisma.

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

  - **controllers**: É responsável por receber e processar as requisições HTTP e delegam a lógica de negócios a serviços.

  - **services**: Armazena a lógica de negócios da aplicação e a interação com o banco de dados.

  - **middlewares**: Armazena funções intermediárias que podem modificar requisições e respostas antes que cheguem aos controladores, como autenticação e validação de dados.

  - **routes**: Define as rotas da API, mapeando URLs específicas para funções nos controladores.

  - **database**: Contém a configuração de conexão e inicialização do banco de dados, além de interações diretas com o Prisma.

  - **utils**: Um local para funções utilitárias e auxiliares que podem ser reutilizadas em diferentes partes da aplicação.

  - **types**: Armazena definições de tipos TypeScript personalizados, ajudando a manter a tipagem em todo o projeto.

  - **server.ts**: O ponto de entrada da aplicação, onde o servidor é configurado e iniciado, incluindo a configuração de middleware e rotas.
