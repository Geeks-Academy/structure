module.exports = {
  extends: [
    'airbnb-typescript/base',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'sort-imports': 0,
    'jsx-a11y/label-has-associated-control': 'off',
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
    'import/no-unresolved': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'no-restricted-globals': 0,
    'no-param-reassign': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    '@typescript-eslint/no-var-requires': 0,
    'import/extensions': 0,
    'no-new': 0,
    'no-underscore-dangle': [
      2, 
      {
        allow: ['_id']
      }
    ],
    '@typescript-eslint/no-shadow': 0,
    
  },
  ignorePatterns: 'src/pages/Structure/**/*.ts',
};
