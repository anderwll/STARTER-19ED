### Passo a passo para configurar o typescript + node

- Criar o nosso arquivo package.json.

```bash
npm init -y
```

- Instalarmos o typescrip como dependencia de desenvolvimento.

```bash
npm i -D typescript
```

- Instalar as tipagens necessárias do node.

```bash
npm i -D @types/node
```

- Instalar o `ts-node-dev` para conseguirmos executar o typescript.

```bash
npm i -D ts-node-dev
```

- Inicializar o nosso arquivo `tsconfing.json`, responsável pelas opções do transpilador typescript.

```bash
npx tsc --init
```

- Dentro do arquivo `tsconfing.json`, ajustar as seguintes propriedades:

  - `"target"`: Alterar para uma versão mais recente do ECMASCRIPT `"ES2022"`
  - `"rootDir"`: Apontar o caminho onde vão estar os arquivos typescript `"./src"`
  - `"outDir"`: Apontar o caminho onde os arquivo transpilados javascript vão ser destinados. `"./dist"`
  - `"exclude": ["node_modules"]`: Garante que não vai transpilar a node modules.
