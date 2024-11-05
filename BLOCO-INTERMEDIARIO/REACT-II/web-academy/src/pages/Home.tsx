import { useEffect, useState } from "react";
import { getAssessments } from "../configs/services/assessment.service";
import { Assessment } from "../types/assessment.type";

export function Home() {
  const [listAssessments, setListAssessments] = useState<Assessment[]>([]);

  // Busca as avaliações
  useEffect(() => {
    function fetchAssessments() {
      const response = getAssessments();
      setListAssessments(response.data || []);
    }

    fetchAssessments();
  }, []);

  return (
    <div>
      <h1>Bem-Vindo</h1>

      {listAssessments.map((assessment, index) => {
        return (
          <div>
            <p>{index}</p>
            <p>{assessment.title}</p>
            <p>{assessment.description}</p>
          </div>
        );
      })}
    </div>
  );
}
