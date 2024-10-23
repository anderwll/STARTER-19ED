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

export interface StudentDto {
  id: string;
  name: string;
  email: string;
  type: StudentType;
  cpf: string;
  age?: number | null;
}

// NULL
// ? ou undefined
