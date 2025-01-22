import defaultConfig from "./jest.config";

export default {
  ...defaultConfig,

  // *.test.ts
  testMatch: ["**/*.spec.ts"],
};
