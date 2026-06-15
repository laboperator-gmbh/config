import { defineConfig } from 'eslint/config';
import jest from 'eslint-plugin-jest';
import nodeConfig from '@laboperator-gmbh/eslint-config-node';

export default defineConfig(
  nodeConfig,
  {
    ignores: [
      'dist/**/*',
      'coverage/**/*',
      'release/**/*',
      'node_modules/**/*',
      '**/package.json',
    ],
  },
  {
    rules: {
      camelcase: ['warn', { properties: 'never' }],

      'class-methods-use-this': 'warn',
      'import/no-extraneous-dependencies': 'warn',
      'no-console': 'warn',
      'no-underscore-dangle': [
        'warn',
        {
          allow: ['_updateCycle'],
          allowAfterThis: true,
        },
      ],
      'sort-keys': 'off',
    },
  },
  {
    files: [
      'test/**',
      'tests/**',
      'spec/**',
      '**/{test,spec}_helper/**',
      '**/__tests__/**',
      '**/__mocks__/**',
      '**/test.{js,ts}',
      '**/test-*.{js,ts}',
      '**/*{.,_}{test,spec}.{js,ts}',
    ],
    ...jest.configs['flat/recommended'],
  },
);
