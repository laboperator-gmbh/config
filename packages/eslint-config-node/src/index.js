import { defineConfig } from 'eslint/config';
import globals from 'globals';
import baseConfig from '@laboperator-gmbh/eslint-config-base';

export default defineConfig(baseConfig, {
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
});
