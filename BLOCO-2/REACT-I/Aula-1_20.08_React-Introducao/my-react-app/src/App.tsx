import ButtonDefault from "./components/ButtonDefault";
/**
 *  FUNCTION
 *
 * function nomeDaFuncao() {}
 *
 *  nomeDaFuncao()
 */

/**
 *  FUNCTION COMPONENT (TSX || JSX)
 *
 * function NomeDaFuncao() {
 *    return <h1>Opa</h1>
 * }
 *
 * <NomeDaFuncao />
 */

function App() {
  return (
    <>
      <h1>Olá mundo</h1>

      <ButtonDefault title="Login" />
      <ButtonDefault title="Cadastre-se" />
    </>
  );
}

export default App;
