import { fixupPluginRules } from '@eslint/compat';
import { defineConfig } from 'eslint/config';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import baseConfig from '@laboperator-gmbh/eslint-config-base';

// eslint-plugin-react's version: 'detect' calls context.getFilename(), which
// ESLint 10 removed.
const reactPlugin = fixupPluginRules(react);

export default defineConfig(
  baseConfig,
  { ...react.configs.flat.recommended, plugins: { react: reactPlugin } },
  { ...react.configs.flat['jsx-runtime'], plugins: { react: reactPlugin } },
  reactHooks.configs.flat.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jquery,
        process: true,
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.tsx'],

    rules: {
      'import/prefer-default-export': 'error',
      'react/jsx-sort-props': [
        'error',
        {
          ignoreCase: true,
          reservedFirst: ['key', 'ref'],
        },
      ],
      'react/prop-types': 'off',
    },
  },
);
