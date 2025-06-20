import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import {readFileSync} from 'fs';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            postcss(),
            resolve(),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json',
                declaration: true,
                declarationDir: './dist'
            }),
            terser(),
        ],
        external: Object.keys(packageJson.dependencies || {}),
    },
];
