import { join } from 'path';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import copy from 'rollup-plugin-copy';

const pkg = require('./package.json');

export default {
  input: join(__dirname, 'src/index.js'),
  output: [
    { file: join(__dirname, 'functions/index.js'), format: 'cjs' },
  ],
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    uglify(),
    copy({ 'package.json': 'functions/package.json', verbose: true }),
  ],
  external: Object.keys(pkg.dependencies),
};
