import type { Config } from 'jest';

const config: Config = {
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,js}'],
  coveragePathIgnorePatterns: ['<rootDir>/src/lib/Simulator.ts'],

  clearMocks: true,
  restoreMocks: true,

  moduleNameMapper: {
    '@fixtures/(.*)': '<rootDir>/spec/fixtures/$1',
    '@src/(.*)': '<rootDir>/src/$1',
  },

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [],

  verbose: true,
};

export default config;
