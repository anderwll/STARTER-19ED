# Academy API

Api de controle de estudantes e suas avaliações.

### Funcionalidades:

**Estudantes**

- Cadastro de estudante ✅
- Listagem de estudantes com filtro pelo nome ou cpf ✅
- Busca de um estudante pelo identificador ✅
- Atualização de um estudante (name, password, type, age) ✅
- Remover um estudante ✅

**Autenticação**

- Adição de Bcrypt para o salvamento da senha do estudante. ✅

- Login (email e senha) ✅
- Rotas autenticadas (S/ JWT): ✅
  - Listagem de estudantes ✅
  - Busca de um estudante ✅
  - Atualização de um estudante ✅
  - Remoção de um estudante ✅
  - Todas as rotas de avaliações ✅

## Avaliações

### Cadastro de avaliações ✅

**POST** `/assessments`

Enpoint para o cadastro de avaliações.

```ts
{
  title: string;
  description: string; // Opcional
  grade: number; // Máx 2 casas dps da vírgula
  studentId: string;
}
```

### Listagem de avaliações

**GET** `/assessments` ✅

Enpoint para a listagem de **todas as avaliações de um determinado estudante.** Utilizar o token para identificar qual o studente logado que está acessando o enpoint.

### Busca de uma avaliação

**GET** `/assessments/:id`

Enpoint para a busca de uma avaliação pelo identificador, somente será possível buscar avaliações que pertence ao estudante logado.

### Atualização de avaliações

**PUT** `/assessments/:id`

Enpoint para a atualização de uma avaliação pelo identificador. Deve existir uma validação para garantir que a avaliação que está sendo atualizada pertence ao estudante logado.

```ts
{
  title: string; // Opcional
  description: string; // Opcional
  grade: number; // Opcional (máx 2 casas dps da vírgula)
}
```

### Remoção de avaliações

**DELETE** `/assessments/:id`

Enpoint para a remoção de uma avaliação pelo identificador. Deve existir uma validação para garantir que a avaliação que está sendo removida pertence ao estudante logado.
