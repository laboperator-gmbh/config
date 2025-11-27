import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
  {
    plugins: { import: importPlugin },
    settings: {
      'import/core-modules': [],
      'import/ignore': [
        'node_modules',
        '\\\\.(coffee|scss|css|less|hbs|svg|json)$',
      ],
    },

    rules: {
      'import/default': 'off',
      'import/export': 'error',
      'import/namespace': 'off',
      'import/no-deprecated': 'off',
      'import/no-unresolved': ['off'],

      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '.circleci/**/*.{js,cjs,mjs}',
            '.github/**/*.{js,cjs,mjs}',
            'eslint.config.{js,cjs,mjs}',
            'test/**',
            'tests/**',
            'spec/**',
            '**/{test,spec}_helper/**',
            '**/__tests__/**',
            '**/__mocks__/**',
            'test.{js,jsx,ts,tsx}',
            'test-*.{js,jsx,ts,tsx}',
            '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}',
            '**/jest.config.{js,ts}',
            '**/jest.setup.{js,ts}',
            '**/vue.config.js',
            '**/webpack.config.js',
            '**/webpack.config.*.js',
            '**/rollup.config.js',
            '**/rollup.config.*.js',
            '**/gulpfile.js',
            '**/gulpfile.*.js',
            '**/Gruntfile{,.js}',
            '**/protractor.conf.js',
            '**/protractor.conf.*.js',
            '**/karma.conf.js',
          ],

          optionalDependencies: false,
        },
      ],

      'import/first': 'error',
      'import/imports-first': 'off',
      'import/no-amd': 'error',
      'import/no-commonjs': 'off',
      'import/no-duplicates': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-namespace': 'off',
      'import/no-nodejs-modules': 'off',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          'newlines-between': 'always',
        },
      ],

      'import/max-dependencies': ['off', { max: 10 }],
      'import/newline-after-import': 'error',
      'import/no-absolute-path': 'error',
      'import/no-dynamic-require': 'error',
      'import/no-internal-modules': ['off', { allow: [] }],
      'import/no-named-default': 'error',
      'import/no-restricted-paths': 'off',
      'import/no-unassigned-import': 'off',
      'import/no-webpack-loader-syntax': 'error',
      'import/prefer-default-export': 'off',
      'import/unambiguous': 'off',

      'import/no-anonymous-default-export': [
        'off',
        {
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowArray: false,
          allowArrowFunction: false,
          allowLiteral: false,
          allowObject: false,
        },
      ],

      'import/exports-last': 'off',
      'import/group-exports': 'off',
      'import/no-cycle': 'error',
      'import/no-default-export': 'off',
      'import/no-named-export': 'off',
      'import/no-self-import': 'error',
      'import/no-useless-path-segments': ['error', { commonjs: true }],

      'import/dynamic-import-chunkname': [
        'off',
        {
          importFunctions: [],
          webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
        },
      ],

      'import/no-relative-parent-imports': 'off',
      'import/no-unused-modules': [
        'off',
        {
          ignoreExports: [],
          missingExports: true,
          unusedExports: true,
        },
      ],
    },
  },
  {
    files: ['**/*.cjs', '**/*.mjs', '**/*.js', '**/*.jsx'],
    rules: {
      'import/named': 'error',
      'import/no-named-as-default': 'error',
      'import/no-named-as-default-member': 'error',
    },
  },
]);
