module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    // 'airbnb-base',
    'plugin:prettier/recommended', // <=ADD
    'prettier/@typescript-eslint', // <=ADD
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier', // <=ADD
  ],
  rules: {
    'prettier/prettier': 'error', // <=ADD
  },
};
