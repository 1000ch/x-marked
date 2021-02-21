import fs from 'fs';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: 'inline'
  },
  plugins: [
    typescript({
      typescript: require('typescript'),
      tslib: fs.readFileSync(require.resolve('tslib'))
    }),
    commonjs(),
    resolve()
  ]
};
