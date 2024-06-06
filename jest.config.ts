/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',
  coverageReporters: ['text'],
  moduleFileExtensions: ['js', 'ts'],
  roots: ['<rootDir>/src'],
  testEnvironment: '@happy-dom/jest-environment',
  moduleNameMapper: {
    '^Blocks/(.*)$': '<rootDir>/src/blocks/$1',
    '^Components/(.*)$': '<rootDir>/src/components/$1',
    '^Directives/(.*)$': '<rootDir>/src/directives/$1',
    '^Services/(.*)$': '<rootDir>/src/services/$1',
    '^Helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^Constants/(.*)$': '<rootDir>/src/constants/$1',
    '^Types/(.*)$': '<rootDir>/src/types/$1',
    '^Utils/(.*)$': '<rootDir>/src/utils/$1'
  },
};

export default jestConfig;
