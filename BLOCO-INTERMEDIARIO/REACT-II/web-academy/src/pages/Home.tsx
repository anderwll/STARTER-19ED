import { useEffect, useState } from "react";
import { getAssessments } from "../configs/services/assessment.service";
import { Assessment } from "../types/assessment.type";
import { TableAssessments } from "../components/Table/Table";
import { Container } from "../components/Container";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/getToken";
import { Button } from "../components/Button";

export function Home() {
  const token = getToken();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [listAssessments, setListAssessments] = useState<Assessment[]>([]);

  // Busca as avaliações
  useEffect(() => {
    async function fetchAssessments() {
      if (!token) {
        navigate("/");
        return;
      }

      setLoading(true);
      const response = await getAssessments(token);

      setLoading(false);
      if (!response.ok) {
        if (response.message === "Erro: Não autenticado!") {
          localStorage.removeItem("token");

          setTimeout(() => {
            navigate("/");
          }, 500);
        }
        alert(response.message);
        return;
      }

      setListAssessments(response.data || []);
    }

    fetchAssessments();
  }, [token, navigate]);

  function logout() {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");

    navigate("/");
  }

  return (
    <>
      <header>
        <Button $color="error" onClick={logout}>
          Sair
        </Button>
      </header>
      <Container>
        <h1>Minhas Avaliações</h1>
        <TableAssessments loading={loading} rows={listAssessments} />
      </Container>
    </>
  );
}
