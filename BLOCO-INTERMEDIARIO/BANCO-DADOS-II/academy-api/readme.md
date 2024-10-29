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

- Adição de Bcrypt para o salvamento das senha do estudante. (BCRYPT)
- Login (email e senha)
- Rotas autenticadas (S/ JWT):
  - Listagem de estudantes
  - Busca de um estudante
  - Atualização de um estudante
  - Remoção de um estudante
  - Todas as rotas de avaliações

**Avaliações**

- Cadastro de avaliações = studentId
  ...
