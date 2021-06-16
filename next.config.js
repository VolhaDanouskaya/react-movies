const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

module.exports = withPlugins([
  [
    withCSS(
      withSass({
        cssModules: true,
        cssLoaderOptions: {
          sourceMap: true,
          localIdentName: '[local]___[hash:base64:5]',
          localsConvention: 'camelCase',
          camelCase: 'dashes',
        },
      }),
    ),
  ],
  [withImages({})],
]);
