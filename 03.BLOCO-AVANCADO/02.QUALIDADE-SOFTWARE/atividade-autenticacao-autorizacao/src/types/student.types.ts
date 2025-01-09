import { StudentType } from "@prisma/client";

export interface StudentToken {
    id: string;
    name: string;
    email: string;
    type: StudentType
}