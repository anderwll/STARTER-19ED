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

export type UpdateAssessmentRequest = Partial<
  Omit<CreateAssessmentRequest, "studentId">
> & {
  id: string;
};

export type QueryAssessmentRequest = {
  page?: number;
  take?: number;
};
