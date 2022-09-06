const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfiguration = {
  target: 'serverless',
  compression: true,
  // Custom loaders are not recognized by next export:
  // using this change to suppress error for now: https://github.com/vercel/next.js/issues/21079
};
const optimizedImagesConfig = {
  imagesName: '[name]-[hash].[ext]',
  handleImages: [']gif'],
  gifsicle: {
    interlaced: true,
    optimizationLevel: 3,
  },
};

module.exports = withPlugins([
  [optimizedImages, optimizedImagesConfig],
  [
    withBundleAnalyzer({
      eslint: {
        dirs: ['.'],
      },
      poweredByHeader: false,
      trailingSlash: true,
      basePath: '',
      // The starter code load resources from `public` folder with `router.basePath` in React components.
      // So, the source code is "basePath-ready".
      // You can remove `basePath` if you don't need it.
      reactStrictMode: true,
    }),
  ],
  nextConfiguration,
]);

// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');

// const nextPlugins = [[optimizedImages]];
// if (process.env.BUNDLE_ANALYZE === 'true') {
//   const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: true,
//   });
//   nextPlugins.push(
//     withBundleAnalyzer({
//       eslint: {
//         dirs: ['.'],
//       },
//       poweredByHeader: false,
//       trailingSlash: true,
//       basePath: '',
//       // The starter code load resources from `public` folder with `router.basePath` in React components.
//       // So, the source code is "basePath-ready".
//       // You can remove `basePath` if you don't need it.
//       reactStrictMode: true,
//     })
//   );
// }

// module.exports = withPlugins(nextPlugins);
