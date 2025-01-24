import { randomUUID } from "crypto";
import { AuthStudent } from "../../src/types/student.type";
import { JWT } from "../../src/utils/jwt";
import { StudentType } from "@prisma/client";

export function makeToken(params?: Partial<AuthStudent>) {
  const payload: AuthStudent = {
    id: randomUUID(),
    name: params?.name || "any_name",
    email: params?.email || "email@email.com",
    type: params?.type || StudentType.T,
  };

  const jwt = new JWT();
  const token = jwt.generateToken(payload);

  return token;
}
