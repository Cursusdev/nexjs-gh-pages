const isProd = process.env.NODE_ENV === 'production';
const isDomain = isProd ? true : false;

const github = isProd ? '/nexjs-gh-pages' : '';
const subdomain = isDomain ? '/dev.httpswebsite.xyz' : '';
module.exports = {
  // Use the CDN in production and localhost for development.
  basePath: isDomain ? subdomain : github,
  assetPrefix: isDomain ? subdomain : github,
  env: {
    BACKEND_URL: isProd
      ? isDomain ? '' : '/nexjs-gh-pages'
      : '',
  },
};
