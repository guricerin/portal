// https://typescript-eslint.io/getting-started
// @ts-check

import eslint from "@eslint/js"
import tseslint from "typescript-eslint"

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    "rules": {
      "semi": ["error", "never", {"beforeStatementContinuationChars": "never"}],
      "quotes": ["error", "double"],
      "@typescript-eslint/no-explicit-any": "off",
    }
  }
)
