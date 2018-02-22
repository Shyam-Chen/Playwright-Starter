import { join } from 'path';
import buble from 'rollup-plugin-buble';
import copy from 'rollup-plugin-copy';

const pkg = require('./package.json');

export default {
  input: join(__dirname, 'src/index.js'),
  output: [
    { file: join(__dirname, 'functions/index.js'), format: 'cjs' },
  ],
  plugins: [
    buble(),
    copy({
      'package.json': 'functions/package.json',
      verbose: true,
    }),
  ],
  external: Object.keys(pkg.dependencies),
  sourcemap: true,
};
