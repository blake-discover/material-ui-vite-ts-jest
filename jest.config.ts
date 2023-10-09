/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "helpers/test-utils": "<rootDir>/src/utils/test-utils",
  },
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transform: {
    ".(ts|tsx)": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
};

export default config;
