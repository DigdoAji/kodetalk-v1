module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2021: true,
    node: true,
    'cypress/globals': true
  },
  extends: ['airbnb-base', 'eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [
    'react',
    'react-refresh',
    'react-hooks',
    'cypress'
  ],
  rules: {
    'react/jsx-no-target-blank': 'off',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': 'off',
    'no-alert': 'off',
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'object-curly-newline': 'off',
    'import/no-unresolved': 'off',
  },
}
