# História: Gestão de Usuários e Recados

O gestor do sistema de comunicação solicitou ao time de desenvolvimento a criação de uma nova funcionalidade para melhor gerenciamento de usuários e seus recados. Inicialmente, será necessário criar duas tabelas principais: uma para armazenar os dados dos usuários e outra para registrar os recados de cada um deles. Além disso, o gestor deseja adicionar um controle sobre o momento da criação dos usuários e dos recados para garantir rastreabilidade e controle temporal, sem modificar as tabelas originais.

## Requisitos:

### 1. Criação das Tabelas:

#### Tabela `usuarios`:

O sistema deve armazenar os dados dos usuários com as seguintes colunas:

- `id`: chave primária gerada automaticamente pelo banco de dados.
- `nome`: nome do usuário.
- `email`: endereço de email (único no sistema).
- `cpf`: CPF (único no sistema).
- `senha`: senha criptografada.

#### Tabela `recados`:

O sistema deve armazenar os recados de cada usuário com as seguintes colunas:

- `id`: chave primária gerada automaticamente pelo banco de dados.
- `titulo`: título do recado.
- `descricao`: descrição do recado.
- `usuario_id`: chave estrangeira referenciando o `id` do usuário.

### 2. Adição de Controle Temporal:

O gestor solicitou a inclusão de uma coluna `created_at` para armazenar a data e hora da criação de cada registro. Essa coluna deve ser adicionada às tabelas `usuarios` e `recados` para que o sistema controle automaticamente quando o registro foi criado.

- **Tabela `usuarios`**: `created_at` (data e hora de criação do usuário).
- **Tabela `recados`**: `created_at` (data e hora de criação do recado).

### 3. Inserção de Dados:

Após a criação das tabelas, insira três usuários no sistema. Cada usuário deve ter pelo menos seis recados associados. Esses dados iniciais servirão para testes e validação da funcionalidade.

### 4. Atualização de Recados:

O primeiro recado de cada usuário deve ser atualizado. Adicione o sufixo "(ATUALIZADO)" ao título do primeiro recado de cada usuário para refletir uma alteração no conteúdo.

### 5. Remoção de Recados:

O quarto recado de cada usuário deve ser removido do sistema, garantindo que a aplicação continue funcionando corretamente após essa exclusão.

## Observações para o Time de Desenvolvimento:

- A adição da coluna `created_at` deve ser realizada sem remoção das tabelas existentes. Isso pode ser feito utilizando a funcionalidade de alteração de tabela (ALTER TABLE) no banco de dados.
- Certifiquem-se de que as operações de inserção, atualização e remoção estejam devidamente registradas e seguras, para evitar perda de dados ou inconsistências no relacionamento entre usuários e recados.
- Testem a inserção e manipulação de dados, garantindo que a chave estrangeira entre as tabelas `usuarios` e `recados` esteja funcionando corretamente.

Essa nova funcionalidade permitirá uma gestão mais eficiente dos usuários e recados, além de fornecer um histórico confiável de quando cada registro foi criado, atendendo às necessidades de controle e rastreabilidade do gestor.
