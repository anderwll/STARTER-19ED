import { useCallback, useEffect, useState } from "react";
import { getAssessments } from "../configs/services/assessment.service";
import { Assessment } from "../types/assessment.type";
import { TableAssessments } from "../components/Table/Table";
import { Container } from "../components/Container";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/getToken";
import { Button } from "../components/Button";
import { UpsertModal } from "../components/UpsertModal";

export function Home() {
  const token = getToken();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [listAssessments, setListAssessments] = useState<Assessment[]>([]);

  const [openModal, setOpenModal] = useState(false);

  function logout() {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");

    navigate("/");
  }

  function handleToggleUpsertModal() {
    setOpenModal(!openModal);
  }

  // Busca avaliação
  const fetchAssessments = useCallback(async () => {
    console.log("Busca de avaliações");

    setLoading(true);
    const response = await getAssessments(token!);
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
  }, [navigate, token]);

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }

    fetchAssessments();
  }, [fetchAssessments, navigate, token]);

  return (
    <>
      <header>
        <Button $color="error" onClick={logout}>
          Sair
        </Button>
        <Button $color="info" onClick={handleToggleUpsertModal}>
          Nova Avaliação
        </Button>
      </header>
      <Container>
        <h1>Minhas Avaliações</h1>
        <TableAssessments loading={loading} rows={listAssessments} />
      </Container>

      <UpsertModal
        isOpen={openModal}
        onClose={handleToggleUpsertModal}
        onFetch={fetchAssessments}
      />
    </>
  );
}
