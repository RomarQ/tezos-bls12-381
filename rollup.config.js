import path from 'path';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'default',
            banner: `/* === Version: ${pkg.version} === */`,
        },
        {
            file: pkg.module,
            format: 'es',
            banner: `/* === Version: ${pkg.version} === */`,
        },
        {
            name: 'Bls12',
            file: pkg.minified,
            format: 'iife',
            exports: 'default',
            compact: true,
            globals: { crypto: 'crypto' },
            banner: `/* === Version: ${pkg.version} === */`,
        },
    ],
    plugins: [
        typescript({
            tsconfig: path.resolve(__dirname, './tsconfig.json'),
        }),
        commonjs(),
        nodePolyfills(),
        resolve({ browser: true }),
        terser(),
    ],
};
