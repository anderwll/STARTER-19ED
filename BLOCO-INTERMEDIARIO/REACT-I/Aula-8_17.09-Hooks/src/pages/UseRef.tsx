import { useEffect, useRef, useState } from "react";
import { Container } from "../components/styleds/Container";
import { Title } from "../components/styleds/Title";
import { DefaultLayout } from "../config/layouts/DefaultLayout";
import { Input } from "../components/styleds/Input";
import { Button } from "../components/styleds/Button";

export default function UseRef() {
  /**
   * useRef
   *
   * O useRef é um hook que serve para criar uma referência a um elemento do DOM.
   *
   * const ref = useRef( valorInicial );
   *
   * Exemplos de uso:
   * - manipular elementos do DOM;
   * - armazenar valores mutáveis.
   *
   * OBS: o useRef não faz com que o componente seja renderizado novamente.
   * VALORES MUTÁVEIS = valores que podem ser alterados sem que o componente seja renderizado novamente.
   *
   */

  const refInput = useRef<HTMLInputElement | null>(null);

  const [nome, setNome] = useState("");

  function enviarDados() {
    if (nome.length < 3) {
      if (refInput.current && nome.length < 3) {
        refInput.current.focus();
        refInput.current.style.border = "2px solid red";
      }
      return;
    }

    console.log("Enviando os dados", { nome });
  }

  useEffect(() => {
    if (refInput.current && nome.length > 3) {
      console.log(nome);

      refInput.current.style.border = "2px solid #3a3a3a";
    }
  }, [nome]);

  useEffect(() => {
    console.log(refInput);
  }, []);

  return (
    <DefaultLayout>
      <Container flexDirection="column" gap="10px">
        <Title>useRef - Example</Title>

        <Input
          ref={refInput}
          value={nome}
          onChange={(e) => setNome(e.currentTarget.value)}
        />

        <Button onClick={enviarDados}>Enviar</Button>
      </Container>
    </DefaultLayout>
  );
}
