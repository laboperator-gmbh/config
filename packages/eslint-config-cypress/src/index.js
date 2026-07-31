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
      // no longer part of mocha's recommended config since v12
      'mocha/consistent-spacing-between-blocks': 'error',
      'mocha/max-top-level-suites': 'error',
      // cypress command chains expose `.then()` but are not promises
      'mocha/no-async-in-sync-tests': 'off',
      'mocha/no-exclusive-tests': 'error',
      'mocha/no-hooks-for-single-child': 'off',
      'mocha/no-mocha-arrows': 'off',
      'mocha/no-setup-in-suite': 'off',
    },
  },
);
