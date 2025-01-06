import { useCallback, useEffect, useState } from "react";
import { getAssessments } from "../configs/services/assessment.service";
import { Assessment } from "../types/assessment.type";
import { TableAssessments } from "../components/Table/Table";
import { Container } from "../components/Container";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/getToken";
import { Button } from "../components/Button";
import { UpsertModal } from "../components/UpsertModal";
import { DeleteModal } from "../components/DeleteModal";

export function Home() {
  const token = getToken();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [listAssessments, setListAssessments] = useState<Assessment[]>([]);

  const [openModal, setOpenModal] = useState(false);
  // Quando edição, tem avaliação, quando não, não tem
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [assessmentEdit, setAssessmentEdit] = useState<Assessment | null>(null);
  const [idToDelete, setIdToDelete] = useState("");

  function logout() {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");

    navigate("/");
  }

  function handleToggleUpsertModal() {
    if (!openModal) {
      setAssessmentEdit(null);
    }
    setOpenModal(!openModal);
  }

  function handleToggleDeleteModal() {
    if (!openModalDelete) {
      setIdToDelete("");
    }
    setOpenModalDelete(!openModalDelete);
  }

  function handlePrepareEdtion(assessment: Assessment) {
    // Abrir o modal
    setOpenModal(true);
    // Passar essa info p/ o modal
    setAssessmentEdit(assessment);
  }

  function handlePrepareDelete(id: string) {
    setOpenModalDelete(true);
    setIdToDelete(id);
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
    <Container>
      <Container $flexDirection="row" $noPadding>
        <h1>Nome do estudante - Avaliações</h1>
        <div>
          <Button
            $color="info"
            onClick={handleToggleUpsertModal}
            style={{ marginRight: "8px" }}
          >
            Nova Avaliação
          </Button>
          <Button $color="error" onClick={logout}>
            Sair
          </Button>
        </div>
      </Container>

      <TableAssessments
        loading={loading}
        rows={listAssessments}
        onEdit={handlePrepareEdtion}
        onDelete={handlePrepareDelete}
      />

      <UpsertModal
        isOpen={openModal}
        assessment={assessmentEdit}
        onClose={handleToggleUpsertModal}
        onFetch={fetchAssessments}
      />
      <DeleteModal
        isOpen={openModalDelete}
        id={idToDelete}
        onFetch={fetchAssessments}
        onClose={handleToggleDeleteModal}
      />
    </Container>
  );
}
