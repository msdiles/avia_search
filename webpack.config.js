const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack')

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{loader: 'ts-loader'}],
      },
      {
        test: /\s?css$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {loader: 'css-loader'},
          {loader: 'sass-loader'},
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js','.json'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  mode: 'development',
  devtool: isDev ? 'source-map' : false,
  plugins: [
    new HTMLWebpackPlugin({
      template: 'index.html'
    }),
    new FriendlyErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 3456,
    compress: true,
    historyApiFallback: true,
    hot: isDev,
    open: true,
    overlay: true,
  },
  node: {
    fs: 'empty'
  }
}
