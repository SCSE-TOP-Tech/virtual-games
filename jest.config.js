/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  clearMocks: true,
  preset: "ts-jest",
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "src", "."],
  setupFilesAfterEnv: ["<rootDir>/jest/singleton.ts"],
};
