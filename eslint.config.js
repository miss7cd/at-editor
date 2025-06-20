import eslint from '@eslint/js';
import tslint from '@typescript-eslint/eslint-plugin';
import typescript from '@typescript-eslint/parser';

export default [
    eslint.configs.recommended,
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: typescript,
            ecmaVersion: 2021,
            sourceType: 'module'
        },
        plugins: {
            '@typescript-eslint': tslint,
        },
        rules: {
            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
        }
    }
];
