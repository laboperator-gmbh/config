module.exports = {
  root: true,
  extends: '@labforward/eslint-config-node',
  rules: {
    // Allow importing devDependencies.
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
