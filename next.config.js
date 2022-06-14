const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([
  [
    optimizedImages,
    {
      inlineImageLimit: 8192,
      imagesFolder: 'images',
      imagesName: '[name]-[hash].[ext]',
      handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp', 'gif'],
      optimizeImages: true,
      optimizeImagesInDev: false,
      mozjpeg: {
        quality: 80,
      },
      optipng: {
        optimizationLevel: 3,
      },
      pngquant: false,
      gifsicle: {
        interlaced: true,
        optimizationLevel: 3,
      },
      webp: {
        preset: 'default',
        quality: 75,
      },
    },
  ],
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
  [
    {
      // https://nextjs.org/docs/basic-features/image-optimization#disable-static-imports
      images: {
        disableStaticImages: true,
      },
    },
  ],
]);
