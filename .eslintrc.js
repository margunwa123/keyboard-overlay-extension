module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["unused-imports"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/no-var-requires": "off",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      ts: true,
    },
  },
  extends: ["plugin:@typescript-eslint/recommended"],
};
