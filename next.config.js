// next.config.js
//const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');

module.exports = withCss({
    cssLoaderOptions: {
      url: false
    },
  });
// module.exports = withSass({
//   cssModules: true,

// });