export interface Assessment {
  id: string;
  title: string;
  description: string;
  grade: number;
  createdAt: Date;
  // studentId: string;
}

export type CreateAssessment = Pick<
  Assessment,
  "title" | "description" | "grade"
>;
