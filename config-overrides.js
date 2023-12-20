const path = require('path');
const { override, addWebpackAlias, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    assets: path.resolve(__dirname, 'src/assets'),
    components: path.resolve(__dirname, 'src/components'),
    router: path.resolve(__dirname, 'src/router'),
    pages: path.resolve(__dirname, 'src/pages'),
    styles: path.resolve(__dirname, 'src/styles'),
    store: path.resolve(__dirname, 'src/store'),
    hooks: path.resolve(__dirname, 'src/hooks'),
    data: path.resolve(__dirname, 'src/data'),
    context: path.resolve(__dirname, 'src/context'),
  }),
  addBabelPlugin('@emotion/babel-plugin')
);
