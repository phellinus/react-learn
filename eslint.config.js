// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import configPrettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import * as parserTypeScript from '@typescript-eslint/parser';
import pluginTypeScript from '@typescript-eslint/eslint-plugin';
import { defineFlatConfig } from 'eslint-define-config';

export default defineFlatConfig([
    {
        ignores: ['**/.*', 'dist/**', 'build/**', 'coverage/**', 'node_modules/**', 'public/**', '*.d.ts'],
    },
    {
        ...js.configs.recommended,
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2024,
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            prettier: pluginPrettier,
        },
        rules: {
            ...configPrettier.rules,
            ...pluginPrettier.configs.recommended.rules,
            'no-debugger': 'off',
            'no-console': 'warn',
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: parserTypeScript,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
                warnOnUnsupportedTypeScriptVersion: false,
            },
        },
        plugins: {
            '@typescript-eslint': pluginTypeScript,
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            prettier: pluginPrettier,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...pluginTypeScript.configs.recommended.rules,
            '@typescript-eslint/consistent-type-imports': [
                'error',
                { fixStyle: 'inline-type-imports', disallowTypeAnnotations: false },
            ],
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
            'no-undef': 'off',
            'no-unused-vars': 'off',
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
            'react-refresh/only-export-components': 'warn',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'prettier/prettier': [
                'error',
                {},
                {
                    usePrettierrc: true,
                    fileInfoOptions: {
                        withNodeModules: true,
                    },
                },
            ],
        },
    },
    {
        files: ['**/*.{js,jsx}'],
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            prettier: pluginPrettier,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
            'react-refresh/only-export-components': 'warn',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
            'prettier/prettier': [
                'error',
                {},
                {
                    usePrettierrc: true,
                    fileInfoOptions: {
                        withNodeModules: true,
                    },
                },
            ],
        },
    },
]);
