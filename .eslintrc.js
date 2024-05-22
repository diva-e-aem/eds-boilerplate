module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['@pro-vision/stylelint-config-pv'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'html', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'max-len': [
      'error',
      {
        code: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
};
