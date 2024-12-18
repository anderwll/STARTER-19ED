export interface Assessment {
  id: string;
  title: string;
  description?: string;
  grade: number;
  createdAt: Date;
}

// export interface CreateAssessmentRequest {
//   title: string;
//   description?: string;
//   grade: number;
// }

export type CreateAssessmentRequest = Pick<
  Assessment,
  "title" | "description" | "grade"
>;

export type UpdateAssessmentRequest = Partial<
  Pick<Assessment, "title" | "grade" | "description">
> & { id: string };
