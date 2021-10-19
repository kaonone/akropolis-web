import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

import { getFiles } from '../../getFiles';

import pkg from './package.json';

const extensions = ['.ts', '.tsx'];
const excludeExtensions = ['.d.ts', '.style.ts'];

export default {
  input: ['./src/index.ts', ...getFiles('./src', extensions, excludeExtensions)],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    commonjs(),
    typescript({
      declaration: true,
      declarationDir: 'dist',
    }),
  ],
};
