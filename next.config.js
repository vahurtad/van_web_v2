const optimizedImages = require('next-optimized-images');
/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfiguration = {
  compression: true,
  // Custom loaders are not recognized by next export:
  // using this change to suppress error for now: https://github.com/vercel/next.js/issues/21079
  images: {
    loader: 'imgix',
    path: 'https://noop/',
  },
};

const optimizedImagesConfig = {
  imagesName: '[name]-[hash].[ext]',
  handleImages: ['gif'],
  gifsicle: {
    interlaced: true,
    optimizationLevel: 3,
  },
};

// https://github.com/hashicorp/next-mdx-enhanced/issues/18#issuecomment-859167393
module.exports = [
  [optimizedImages, optimizedImagesConfig],
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
  nextConfiguration,
];
