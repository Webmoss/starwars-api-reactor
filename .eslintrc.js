// ESLint Configuration
module.exports = {
  
  env: {
    browser: true,
    node: true,
    es6: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module'
  },

  extends: [
    'eslint:recommended'
  ],

  plugins: [
    'react',
    'react-hooks'
  ],

  globals: {
    'page': true
  },

  rules: {
    'semi': [2, 'never'],
    'indent': ['error', 2, { SwitchCase: 1 }],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of React Hooks
    'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
  }
}
