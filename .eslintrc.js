module.exports = {
  extends: ["@yzh-devkit/eslint-config-lint/eslintWithTS"],
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "react/no-array-index-key": "off",
    "no-underscore-dangle": "off",
    "react/no-unstable-nested-components": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-var-requires": "off",
    // // warn
    // 'simple-import-sort/imports': [
    //     'warn',
    //     { groups: [['^react', '^[a-z]', '^@[^/]'], ['^@/'], ['^\\.'], ['.(less|css)$']] },
    // ],
  },
}
