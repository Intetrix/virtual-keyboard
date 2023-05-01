module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': ['error', 'ignorePackages'],
    'no-new': 0,
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
  },
};
