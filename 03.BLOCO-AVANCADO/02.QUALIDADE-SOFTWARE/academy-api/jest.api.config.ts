import defaultConfig from "./jest.config";

export default {
  ...defaultConfig,
  // testes/routes/students/create-student.test.ts
  testMatch: ["<rootDir>/tests/routes/**/*.test.ts"],
};
