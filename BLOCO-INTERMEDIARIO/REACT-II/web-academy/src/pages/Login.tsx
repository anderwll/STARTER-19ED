import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Form } from "../components/Form";
import { login } from "../configs/services/auth.service";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/getToken";

export function Login() {
  const navigate = useNavigate();
  const token = getToken();
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    event.preventDefault();

    const data = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    // Requisita para o backend
    const response = await login(data);

    setLoading(false);
    if (!response.ok) {
      alert(response.message);
      return;
    }

    // Guarda esse token
    if (checked) {
      localStorage.setItem("token", response.data!.token);
    }
    sessionStorage.setItem("token", response.data!.token);

    // Navegar para home
    alert(response.message);
    navigate("/home");
  }

  useEffect(() => {
    if (token) {
      navigate("/home");
      return;
    }
  }, [token, navigate]);

  return (
    <Container $fullHeight>
      <Form onSubmit={onSubmit}>
        <h1>Login</h1>
        <input type="email" placeholder="E-mail" name="email" />
        <input type="password" placeholder="Senha" name="password" />
        <div>
          <input
            type="checkbox"
            value={String(checked)}
            onChange={() => setChecked(!checked)}
          />
          <label>Deseja permanecer logado?</label>
        </div>

        <Button type="submit" disabled={loading}>
          Entrar
        </Button>
      </Form>
    </Container>
  );
}
