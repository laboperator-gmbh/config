import { defineConfig } from 'eslint/config';
import cypress from 'eslint-plugin-cypress';
import mocha from 'eslint-plugin-mocha';
import baseConfig from '@laboperator-gmbh/eslint-config-base';

export default defineConfig(
  baseConfig,
  cypress.configs.recommended,
  mocha.configs.recommended,
  {
    rules: {
      'max-nested-callbacks': 'off',
      'max-statements': 'off',
      'mocha/no-exclusive-tests': 'error',
      'mocha/no-hooks-for-single-case': 'off',
      'mocha/no-mocha-arrows': 'off',
      'mocha/no-setup-in-describe': 'off',
    },
  },
);
