export interface Assessment {
  id: string;
  title: string;
  description: string;
  grade: number;
  createdAt: Date;
  studentId: string;
}

export type CreateAssessmentRequest = Pick<
  Assessment,
  "title" | "description" | "grade" | "studentId"
>;

export type UpdateAssessment = Partial<CreateAssessmentRequest> & {
  id: string;
};

export type QueryAssessmentRequest = {
  page?: number;
  take?: number;
};
