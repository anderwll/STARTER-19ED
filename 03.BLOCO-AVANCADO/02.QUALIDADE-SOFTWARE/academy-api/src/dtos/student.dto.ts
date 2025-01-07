import { StudentType } from "@prisma/client";
import { AssessmentDto } from "./assessment.dto";

// DTO - Data Transfer Object
export interface CreateStudentDto {
  name: string;
  email: string;
  password: string;
  type: StudentType;
  cpf: string;
  age?: number;
}

export interface StudentDto {
  id: string;
  name: string;
  email: string;
  type: StudentType;
  cpf: string;
  age?: number | null;
  assessments?: Array<AssessmentDto>;
}

// NULL
// ? ou undefined

export interface QueryFilterDto {
  name?: string;
  cpf?: string;
}

export interface UpdateStudentDto {
  name?: string;
  password?: string;
  type?: StudentType;
  age?: number;
}
