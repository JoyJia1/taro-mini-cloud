module.exports = {
  extends: ['taro/react'],
  parser: '@typescript-eslint/parser',
  rules: {
    camelcase: 'off',
    '@typescript-eslint/camelcase': [''],
    'no-unused-vars': ['error', { varsIgnorePattern: 'Taro' }],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: 'Taro' }
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-empty-function': ['warn'],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    'import/no-commonjs': 2,
    'import/prefer-default-export': 0,
    'react/sort-comp': 0,
    'jsx-quotes': 0
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    useJSXTextNode: true,
    project: './tsconfig.json'
  }
};
