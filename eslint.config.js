import globals from 'globals';
import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default [
  // Ignore build artifacts
  {
    ignores: ['dist', '.vite/', 'node_modules'],
  },

  // Base ESLint recommended rules
  js.configs.recommended,

  // React specific rules
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser, // Add browser globals (e.g., window, document)
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      // Optional: Add custom rules or override existing ones here
      // For example, if you want to enforce single quotes:
      // "quotes": ["error", "single"],

      // Integrate Prettier rules
      'prettier/prettier': 'error', // Report Prettier differences as ESLint errors
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+ JSX transform
      'react/prop-types': 'off', // Often turned off in modern React apps (TypeScript or prop destructuring)
    },
  },

  // Disables ESLint rules that might conflict with Prettier
  // This must be the last configuration in the extends array to ensure it overrides all other configs.
  configPrettier,
];
