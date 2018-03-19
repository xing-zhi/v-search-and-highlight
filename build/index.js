const path = require('path');

const del = require('del');
const rollup = require('rollup');
const uglify = require('rollup-plugin-uglify');

const pathResolve = (...p) => path.resolve(__dirname, ...p);

const builds = {
  cjs: {
    inputOptions: {
      input: pathResolve('../src/index.js')
    },
    outputOptions: {
      file: pathResolve('../dist/v-search-and-highlight.common.js'),
      format: 'cjs'
    }
  },
  esm: {
    inputOptions: {
      input: pathResolve('../src/index.js')
    },
    outputOptions: {
      file: pathResolve('../dist/v-search-and-highlight.es.js'),
      format: 'es'
    }
  },
  umd: {
    inputOptions: {
      input: pathResolve('../src/index.js')
    },
    outputOptions: {
      file: pathResolve('../dist/v-search-and-highlight.js'),
      name: 'VSearchAndHighlight',
      format: 'umd'
    }
  },
  'umd.min': {
    inputOptions: {
      input: pathResolve('../src/index.js'),
      plugins: [uglify()]
    },
    outputOptions: {
      file: pathResolve('../dist/v-search-and-highlight.min.js'),
      name: 'VSearchAndHighlight',
      format: 'umd'
    }
  }
};

del.sync(pathResolve('../dist'));

Object.keys(builds).forEach(async key => {
  const { inputOptions, outputOptions } = builds[key];
  const bundle = await rollup.rollup({ ...inputOptions });

  await bundle.write({ ...outputOptions });
});
