import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfigRecommended from 'eslint-plugin-prettier/recommended';
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys';

export default defineConfig([
  eslint.configs.recommended,
  prettierConfigRecommended,
  {
    plugins: { 'sort-destructure-keys': sortDestructureKeys },

    linterOptions: {
      reportUnusedDisableDirectives: true,
    },

    rules: {
      'getter-return': ['error', { allowImplicit: true }],

      'no-await-in-loop': 'error',
      'no-cond-assign': ['error', 'always'],
      'no-console': 'warn',
      'no-template-curly-in-string': 'error',
      'require-atomic-updates': 'off',

      'array-callback-return': ['error', { allowImplicit: true }],

      'block-scoped-var': 'error',
      complexity: ['warn', 10],
      'consistent-return': 'error',
      'default-case': 'error',
      'default-param-last': 'error',
      'dot-notation': 'error',
      eqeqeq: ['error', 'smart'],
      'no-alert': 'error',
      'no-caller': 'error',
      'no-constructor-return': 'error',
      'no-empty-function': [
        'error',
        { allow: ['arrowFunctions', 'functions', 'methods'] },
      ],
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-global-assign': 'error',
      'no-implicit-globals': 'error',
      'no-iterator': 'error',
      'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': [
        'error',
        {
          props: true,

          ignorePropertyModificationsFor: [
            'acc',
            'accumulator',
            'e',
            'ctx',
            'req',
            'request',
            'res',
            'response',
            '$scope',
            'staticContext',
          ],
        },
      ],
      'no-proto': 'error',
      'no-return-assign': ['error', 'always'],
      'no-script-url': 'error',
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unused-expressions': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'no-void': 'error',
      radix: 'error',
      strict: ['error', 'never'],
      'vars-on-top': 'error',
      yoda: 'error',

      'no-label-var': 'error',
      'no-restricted-globals': ['error', 'event'],
      'no-shadow': 'error',
      'no-undef-init': 'error',
      'no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
        },
      ],
      'no-use-before-define': ['error', { functions: false }],

      camelcase: ['warn', { properties: 'always' }],
      'func-names': 'warn',
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'max-depth': ['warn', 4],
      'max-nested-callbacks': ['warn', 3],
      'max-params': ['warn', 4],
      'max-statements': ['warn', 10],
      'new-cap': 'error',
      'no-array-constructor': 'error',
      'no-bitwise': 'error',
      'no-continue': 'error',
      'no-lonely-if': 'error',
      'no-multi-assign': 'error',
      'no-nested-ternary': 'error',
      'no-plusplus': 'error',
      'no-unneeded-ternary': 'error',
      'operator-assignment': ['error', 'always'],
      'prefer-object-spread': 'error',
      'sort-keys': [
        'warn',
        'asc',
        {
          allowLineSeparatedGroups: true,
          caseSensitive: false,
          natural: true,
        },
      ],

      'no-restricted-imports': [
        'warn',
        {
          patterns: [
            {
              group: ['../*'],
              message: 'Usage of relative parent imports is not allowed.',
            },
          ],
        },
      ],
      'no-useless-computed-key': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-const': ['error', { destructuring: 'all' }],
      'prefer-destructuring': ['error', { array: false, object: true }],
      'prefer-numeric-literals': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'sort-destructure-keys/sort-destructure-keys': [
        'error',
        { caseSensitive: false },
      ],
      'symbol-description': 'error',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],

    extends: ['typescript-eslint/recommendedTypeChecked'],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    plugins: { 'typescript-eslint': tseslint },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
        },
      ],
      'no-unused-vars': 'off',

      '@typescript-eslint/no-use-before-define': [
        'error',
        { functions: false },
      ],
      'no-use-before-define': 'off',

      '@typescript-eslint/member-ordering': [
        'warn',
        {
          interfaces: { order: 'natural-case-insensitive' },
          typeLiterals: { order: 'natural-case-insensitive' },
        },
      ],
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
      '**/test.{js,jsx,ts,tsx}',
      '**/test-*.{js,jsx,ts,tsx}',
      '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}',
    ],

    rules: {
      '@typescript-eslint/unbound-method': 'off',
      'max-nested-callbacks': 'off',
      'max-statements': 'off',
    },
  },
]);
