import { StudentType } from "@prisma/client";

export interface AuthStudent {
  id: string;
  name: string;
  email: string;
  type: StudentType;
}
