const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/nexjs-gh-pages' : '',
  },
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
}