import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
  { ignores: ["dist/**", "public/**"] },
  js.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  prettier,
  {
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
  {
    files: ["scripts/**", "*.config.js"],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
];
