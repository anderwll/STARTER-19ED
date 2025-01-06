export interface CreateAssessmentDto {
  title: string;
  description?: string;
  grade: number;
  studentId: string;
}

export interface UpdateAssessmentDto {
  title?: string;
  description?: string;
  grade?: number;
}

export interface AssessmentDto {
  id: string;
  title: string;
  description?: string | null;
  grade: number;
  studentId: string;
  createdAt: Date;
}
