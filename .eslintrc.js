module.exports = {
  extends: ['@pro-vision/eslint-config-pv/typescript', '@pro-vision/eslint-config-pv/prettier'],
  rules: {
    'prefer-arrow-callback': 'off',
    'import/extensions': 'off',
    'one-var': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
  },
};
