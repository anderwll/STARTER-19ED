
## Adicionar e configurar ESLint no projeto

**1** - Adicionar as extensões no VSCode:
  - ESLint
  - Prettier ESLint
  - Prettier - Code formatter

**2** - Instalar o ESLint e o Prettier

```bash
    npm install eslint prettier --save-dev
```

**3** - Criar um arquivo no diretório raiz e adicionar a seguinte configuração:
   
**.eslintrc.cjs**
```cjs
    module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['standard', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'prettier'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {},
    settings: {
        react: {
            version: 'detect', 
        },
    },
};
```

**4** - Definir a configuração do Prettier: crie um arquivo no diretório raiz e adicionar a seguinte configuração.

**.prettierrc**
```json
{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": true,
  "singleQuote": true,
  "endOfLine": "lf",
  "printWidth": 150
}
```

**5** - Adicionar o srcipt: 

```json
"scripts": {
  ...
  "lint": "eslint . --ext .ts,.tsx"
}

```
---

**Opcional:**

- Arquivo `.eslintignore`

```
node_modules/
dist/
env.d.ts
```

- Adicionar o script no package.json: 

```json
"scripts": {
  ...
  "lint": "eslint . --ext .ts,.tsx"
}

```

## Integrando com o VSCode

- Preferências - Abrir configurações do usuário

```json

> CRTL + SHIFT + P 

> Preferences: Open User Settigns (JSON)

> Adicionar se não existir: 

"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode"

```




