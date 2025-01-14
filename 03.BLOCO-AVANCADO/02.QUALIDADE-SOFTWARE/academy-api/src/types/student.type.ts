import { StudentType } from "@prisma/client";

/**
 * @interface AuthStudent
 * @property `id`: identificador único do estudante
 * @property `name`: nome do estudante
 * @property `email`: email do estudante
 * @property `type`: tipo do estudante (**M**, **F**, **T**)
 */
export interface AuthStudent {
  id: string;
  name: string;
  email: string;
  type: StudentType;
}
