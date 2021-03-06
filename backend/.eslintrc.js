module.exports = {
  env: {
    es6: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  plugins: [
    "@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module"
  },
  rules: {
    "no-console": "off",
    "@typescript-eslint/no-empty-function": "warn"
  },
  settings: {}
}
