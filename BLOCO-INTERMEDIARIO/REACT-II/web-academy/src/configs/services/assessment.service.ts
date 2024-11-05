import { assessmentsMock } from "../mocks/assessments.mock";

export function getAssessments() {
  try {
    return {
      ok: true,
      message: "Avaliações buscadas com sucesso.",
      data: assessmentsMock,
    };
  } catch (error: any) {
    return {
      ok: false,
      message: `Erro: ${error.message}`,
    };
  }
}
