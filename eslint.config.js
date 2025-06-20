// @ts-check
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const compat = new FlatCompat();

export default [
    js.configs.recommended,
    ...compat.extends('plugin:@typescript-eslint/recommended'),
    ...compat.extends('plugin:prettier/recommended'),
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                sourceType: 'module',
                ecmaVersion: 2020,
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
        },
        rules: {
            // 你可以在这里自定义规则
            '@typescript-eslint/no-unused-vars': ['warn'],
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
    {
        files: ['*.js'],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
        },
    },
];
