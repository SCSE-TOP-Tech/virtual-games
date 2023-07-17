/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  clearMocks: true,
  preset: "ts-jest",
  testEnvironment: "node",
  testEnvironmentOptions: {
    url: "https://jestjs.io/",
  },
  moduleDirectories: ["node_modules", "src", __dirname],
  setupFilesAfterEnv: ["<rootDir>/jest/singleton.ts"],
};
