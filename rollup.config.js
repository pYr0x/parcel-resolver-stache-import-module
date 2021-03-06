import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

const external = Object.keys(pkg.dependencies).concat(['path', 'fs', 'typescript']);

export default {
  input: 'src/StacheDynamicImportResolver.ts',
  plugins: [
    typescript({ sourceMap: false }),
  ],
  external,
  output: [
    {file: pkg.main, format: 'cjs', exports: 'auto'},
    {file: pkg.module, format: 'esm' }
  ]
};
