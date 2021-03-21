module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'webpack',
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    document: true,
    window: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    jest: {
      version: 26,
    },
    react: {
      pragma: 'React',
      version: '16.12.0',
    },
  },
  plugins: ['react'],
  rules: {},
  overrides: [
    {
      files: ['tests/', '*.test.js'],
      plugins: ['jest', 'jest-formatting'],
      env: {
        'jest/globals': true,
      },
      extends: ['plugin:jest-formatting/recommended', 'plugin:jest/all'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'jest-formatting/padding-around-describe-blocks': 2,
        'jest-formatting/padding-around-test-blocks': 2,
      },
    },
  ],
};
