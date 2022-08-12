module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser"
  },
  plugins: [
    "prettier",
    "vue"
  ],
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "indent": ["error", 2],
    "linebreak-style": ["error", "windows"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 5
    }],
    "vue/singleline-html-element-content-newline": ["warn", {
      "ignores": ["router-link", "a", "abbr", "span"]
    }]
  }
};

