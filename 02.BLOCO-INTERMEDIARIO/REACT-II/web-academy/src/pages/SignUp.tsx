import { useState } from "react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Form } from "../components/Form";
import { Select } from "./../components/Select";
import { signUp } from "../configs/services/auth.service";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  async function handleForm(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault();

    const data = {
      name: e.currentTarget.nome.value,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
      type: e.currentTarget.type.value,
      age: Number(e.currentTarget.age.value),
      cpf: e.currentTarget.cpf.value,
    };

    const confirmPassword = e.currentTarget.confirmPassword.value;

    if (data.password !== confirmPassword) {
      alert("As senhas não são iguais !");
    }

    const response = await signUp(data);

    setLoading(false);
    alert(response.message);

    if (!response.ok) {
      return;
    }

    setTimeout(() => {
      navigate("/");
    }, 500);
  }
  return (
    <Container $fullHeight>
      <Form onSubmit={handleForm}>
        <h1>Cadastro</h1>
        <input type="text" placeholder="Nome" name="nome" required />
        <input type="email" placeholder="E-mail" name="email" required />

        <input type="number" placeholder="idade" name="age" />

        <input
          type="text"
          placeholder="cpf"
          name="cpf"
          maxLength={11}
          required
        />

        <input type="password" placeholder="Senha" name="password" required />

        <input
          type="password"
          placeholder="Confirmar senha"
          name="confirmPassword"
          required
        />

        <Select width="100%" name="type" required>
          <option value="">Status do aluno</option>
          <option value="M">Matriculado</option>
          <option value="F">Formado</option>
          <option value="T">Tech Helper</option>
        </Select>

        <Button disabled={loading} type="submit">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};
