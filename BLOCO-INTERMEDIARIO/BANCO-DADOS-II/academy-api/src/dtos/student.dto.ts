import { StudentType } from "@prisma/client";

// DTO - Data Transfer Object

export interface CreateStudentDto {
  name: string;
  email: string;
  password: string;
  type: StudentType;
  cpf: string;
  age?: number;
}
