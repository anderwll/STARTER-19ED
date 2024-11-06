import { useEffect, useState } from "react";
import { getAssessments } from "../configs/services/assessment.service";
import { Assessment } from "../types/assessment.type";
import { TableAssessments } from "../components/Table/Table";
import { Container } from "../components/Container";

export function Home() {
  const [loading, setLoading] = useState(false);
  const [listAssessments, setListAssessments] = useState<Assessment[]>([]);

  // Busca as avaliações
  useEffect(() => {
    async function fetchAssessments() {
      setLoading(true);
      const response = await getAssessments(
        "d8b78935-9b82-4c86-ac90-53a5f49693fe"
      );

      setLoading(false);
      if (!response.ok) {
        alert(response.message);
        // navegar p/ a tela de login
        return;
      }

      setListAssessments(response.data || []);
    }

    fetchAssessments();
  }, []);

  return (
    <Container>
      <h1>Minhas Avaliações</h1>
      <TableAssessments loading={loading} rows={listAssessments} />
    </Container>
  );
}
