import { useEffect, useState } from "react";
import { getAssessments } from "../configs/services/assessment.service";
import { Assessment } from "../types/assessment.type";
import { TableAssessments } from "../components/Table/Table";
import { Container } from "../components/Container";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/getToken";

export function Home() {
  const navigate = useNavigate();
  const token = getToken();

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

      console.log(response);

      setLoading(false);
      if (!response.ok) {
        alert(response.message);
        navigate("/");
        return;
      }

      setListAssessments(response.data || []);
    }

    fetchAssessments();
  }, [token, navigate]);

  return (
    <Container>
      <h1>Minhas Avaliações</h1>
      <TableAssessments loading={loading} rows={listAssessments} />
    </Container>
  );
}
