const isProd = (process.env.NODE_ENV || 'production') === 'production'

module.exports = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : '',
  },
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
}