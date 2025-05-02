import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import css from "@eslint/css";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["**/*.css"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    extends: [prettier],
  },
  {
    files: ["**/*.css"],
    plugins: {
      css,
    },
    rules: {},
  },
]);
