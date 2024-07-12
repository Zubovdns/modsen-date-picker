import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import resolve, { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import path from 'path';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { fileURLToPath } from 'url';

import packageJson from './package.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const customResolver = resolve({
	extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss'],
	browser: true,
});

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
			peerDepsExternal(),
			nodeResolve(),
			commonjs(),
			typescript({
				tsconfig: './tsconfig.json',
				declaration: true,
				declarationDir: 'dist',
				sourceMap: true,
				exclude: [
					'**/*.test.tsx',
					'**/*.test.ts',
					'**/*.stories.ts',
					'src/stories/**',
				],
			}),
			terser(),
			babel({
				configFile: './.babelrc',
				babelHelpers: 'runtime',
				exclude: 'node_modules/**',
				plugins: ['babel-plugin-styled-components'],
			}),
			eslint({
				exclude: 'node_modules/',
			}),
			svgr(),
			postcss({
				getExportNamed: false,
				extract: 'styles.css',
			}),
			alias({
				entries: [{ find: 'src', replacement: path.resolve(__dirname, 'src') }],
				resolve: customResolver,
			}),
		],
		external: ['react', 'react-dom', 'styled-components'],
	},
	{
		input: 'dist/esm/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
		external: [/\.css$/],
	},
];
