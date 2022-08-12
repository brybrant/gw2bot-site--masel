'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const { VueLoaderPlugin } = require('vue-loader')
const ESLintPlugin = require('eslint-webpack-plugin')
// https://vue-loader.vuejs.org/
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '%': resolve('node_modules')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|webp|jpe?g|gif|svg)(\?.*)?$/,
        /*loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }*/
        type: 'asset/resource',
        generator: {
          filename: utils.assetsPath('img/[name].[contenthash].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        /*loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }*/
        type: 'asset/resource',
        generator: {
          filename: utils.assetsPath('media/[name].[contenthash].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        /*loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }*/
        type: 'asset/resource',
        generator: {
          filename: utils.assetsPath('fonts/[name].[contenthash].[ext]')
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ESLintPlugin({
      extensions: ['js','vue'],
      formatter: 'stylish'
    })
  ],
  node: {
    // https://webpack.js.org/configuration/node/
    global: false,
    __filename: 'warn-mock',
    __dirname: 'warn-mock'
  }
}
