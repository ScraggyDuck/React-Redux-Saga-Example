module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier'
  ],
  rules: {
    'react/prop-types': 1,
    'react/jsx-max-props-per-line': 1,
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': 0,
    'import/order': 0,
    'react/jsx-filename-extension': 0,
    'arrow-parens': 0,
    'react/no-array-index-key': 0,
    'jsx-quotes': 0,
    'class-methods-use-this': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/state-in-constructor': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/prefer-stateless-function': 0,
    'prettier/prettier': ['error'],
    'no-unused-vars': 1,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'import/no-duplicates': 1,
    'import/prefer-default-export': 0,
    'no-case-declarations': 0
  },
  plugins: ['prettier'],
  env: {
    es6: true,
    browser: true,
    node: true
  }
};
