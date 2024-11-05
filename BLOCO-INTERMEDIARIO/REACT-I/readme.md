## ReactJS + Vite + TS

- Rodar o comando para criar o projeto ReactJS

```bash
npm create vite@latest my-react-app -- --template react-ts
```

- Entrar na pasta do projeto criado.

- Rodar o comando para instalar as dependencias

```bash
npm install
```

- Rodar o srcip de dev, para subir o frontend.

```bash
npm run dev
```

- Excluirmos os arquivos que não são necessários.

  - Remover arquivos css (index.css, app.css).
  - Remover os imports dos arquivos css.
  - Remover os HTML que estão sendo retornados no App.tsx

## React Router Dom

- Rodar o comando para instalar o `react-router-dom`

```bash
npm i react-router-dom
```

- Criar o arquivo `AppRoutes.tsx`, dentro da pasta `/config/routes`

```tsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <MeuComponente />,
  },
  // ...rest paths
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
```

- Chamar o provisionamento das rotas dentro de `App.tsx`.

```tsx
function App() {
  return <AppRoutes />;
}

export default App;
```

**Para mais informações**: [React Router Dom | Overview](https://reactrouter.com/en/main/start/overview)

## Styled Components

- Rodar o comando para instalar o `styled-components`

```bash
npm i styled-components
```

- Exemplo simples de componente criado com `styled-components`.

```tsx
interface ButtonProps {
  textColor: string;
  //...minhas props
}

export const Button = styled.button<ButtonProps>`
  color: ${(props) => props.textColor};
  background-color: #3a3a3a;

  &:hover {
    box-shadow: 0 0 0 2px rgb(49, 132, 253, 0.5);
  }
`;
```

**Para mais informações**: [Styled Components | Getting Started](https://styled-components.com/docs/basics#getting-started)

### Como criar estilos compartilhados por toda a aplicação.

- Criar o arquivo `GlobalStyles.tsx` dentro da pasta `config/global`.

```tsx
export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  /* ...resto dos meu estilos compartilhados */
`;
```

- Chamar o function component dentro de `App.tsx`.

```tsx
function App() {
  return (
    <>
      <AppRoutes />
      <GlobalStyles />
    </>
  );
}
export default App;
```

**Para mais informações**: [Styled Components | createGlobalStyle](https://styled-components.com/docs/api#createglobalstyle)

### Como construir temas padrões utilizando `styled-components`:

- Criar o arquivo `styled.d.ts`, dentro de `src`. Com esse arquivo declararmos dentro da `node_modules` as tipagens das propriedades do nosso objeto de tema juntamente com a tipagem já existente do styled, o `DefaultTheme`.

```ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    textColor: string;
    //...resto das minhas propriedades
  }
}
```

- Criar os meus arquivos de temas, exemplo `light.ts` e `dark.ts` contendo em cada um o objeto de tema com os valores desejáveis.

```ts
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  backgroundColor: "#fffff",
  textColor: "#000",
  //...resto das minhas propriedades
};
```

- Prover o objeto de tema criado para a aplicação, chamando dentro de `App.tsx`.

```tsx
function App() {
  return (
    // Alternar entre os objetos para trocar de tema => theme={darkTheme}
    <ThemeProvider theme={lightTheme}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
```

- Após definirmos nossos temas e provermos os mesmo para todas a nossa aplicação, devemos utilizar o mesmo dentro dos componentes, como no exemplo.

```tsx
// Exemplo em um componente simples
export const Button = styled.button`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

// Exemplo dentro dos meus estilos compartilhados
export const GlobalStyles = createGlobalStyle`
  body {
      background-color: ${(props) => props.theme.backgroundColor};
      color: ${({ theme }) => theme.textColor};
  }
`;
```

**Para mais informações**: [Styled Components | Theming](https://styled-components.com/docs/advanced#theming)
