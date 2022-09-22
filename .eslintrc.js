module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "plugins": [
    "simple-import-sort",
    "@typescript-eslint"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always",
      { "omitLastInOneLineBlock": true}
    ],
    "no-multi-spaces": ["off"],
    "prefer-const": ["error", {
      "destructuring": "all"
    }],
    "comma-dangle": ["error", "never"],
    "array-callback-return": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  }
};
  