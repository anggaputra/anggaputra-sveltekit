module.exports = {
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
  root: true,
  extends: ["eslint:recommended", "prettier"],
  plugins: ["svelte3", "html"],
  ignorePatterns: ["*.cjs"],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  settings: {
    "svelte3/typescript": () => require("typescript"),
  },
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
