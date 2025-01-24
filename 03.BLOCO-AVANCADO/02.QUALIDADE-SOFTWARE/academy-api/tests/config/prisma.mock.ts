import { PrismaClient } from "@prisma/client";
import { mockDeep, mockReset, DeepMockProxy } from "jest-mock-extended";

import { prisma } from "../../src/database/prisma.database";

jest.mock("../../src/database/prisma.database", () => ({
  __esModule: true,
  prisma: mockDeep<PrismaClient>(),
}));

// Hook - Antes de cada teste (it ou test)
beforeEach(() => {
  // console.log("Resetou o mock do prisma!");
  mockReset(prismaMock);
});

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;
