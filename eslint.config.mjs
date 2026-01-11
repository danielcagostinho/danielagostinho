import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "dist/**",
      "build/**",
      "node_modules/**",
      "next-env.d.ts",
      ".eslintcache",
      "**/*.config.js",
      "**/*.config.mjs",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-restricted-syntax": [
        "error",
        {
          selector: "JSXAttribute[name.name='className'] > JSXExpressionContainer > TemplateLiteral",
          message: "Do not use template literals for className. Use the cn() utility function from @/lib/utils instead.",
        },
        {
          selector: "JSXAttribute[name.name='class'] > JSXExpressionContainer > TemplateLiteral",
          message: "Do not use template literals for class. Use the cn() utility function from @/lib/utils instead.",
        },
      ],
    },
  },
];

export default eslintConfig;
