export default {
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,js}'],
  coveragePathIgnorePatterns: ['<rootDir>/src/lib/Simulator.ts'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

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
