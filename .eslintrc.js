// .eslintrc.js
export default {
  env: {
    node: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:security/recommended'],
  plugins: ['security'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {}
};
