/* Webpack */
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack/webpack.config.js')

const compiler = webpack(config)
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
})

const hotMiddleware = webpackHotMiddleware(compiler)

const middlewares = {
  middleware,
  hotMiddleware
}

module.exports = middlewares
