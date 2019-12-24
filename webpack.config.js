'use strict';

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.(m?js|node)$/,
        parser: { amd: false },
        use: {
          loader: '@marshallofsound/webpack-asset-relocator-loader',
          options: {
            outputAssetBase: 'native_modules',
          },
        },
      },
    ],
  },
};
