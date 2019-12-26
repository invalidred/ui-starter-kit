module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    'prettier',
    '@typescript-eslint',
    'react-hooks',
    'jest',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:jest/recommended'
  ],
  rules: {
    "prettier/prettier": "error",
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/await-thenable': 'off'
  },
  settings: {
    react: { version: 'detect' }
  }
}
