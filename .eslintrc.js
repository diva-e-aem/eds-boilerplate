module.exports = {
  extends: ['@pro-vision/eslint-config-pv/typescript', '@pro-vision/eslint-config-pv/prettier'],
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '{Blocks,Components,Directives,Services,Helpers,Constants,Types,Utils}/**/*',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        groups: [
          'builtin',
          'external',
          'internal',
          ['index', 'sibling', 'parent']
        ],
      },
    ],
    'prefer-arrow-callback': 'off',
    'import/extensions': [
      2,
      'always',
      {
        '': 'never',
        ts: 'never',
      },
    ],
    'one-var': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
  },
};
