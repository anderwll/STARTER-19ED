import { Link } from "react-router-dom";
import ButtonDefault from "../components/ButtonDefault";

function Login() {
  return (
    <>
      <h1>LOGIN</h1>

      <label htmlFor="">E-mail:</label>
      <input type="text" />

      <label htmlFor="">Senha:</label>
      <input type="text" />

      <a href="/home">
        <ButtonDefault title="Login com <a>" />
      </a>

      <Link to="/home">
        <ButtonDefault title="Login" />
      </Link>

      <ButtonDefault title="Cadastre-se" />
    </>
  );
}

export default Login;
