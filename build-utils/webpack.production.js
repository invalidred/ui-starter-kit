const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = () => ({
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'multiple',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 1,
        },
        reactRedux: {
          test: /[\\/]node_modules[\\/](react|react-dom|redux|react-redux|immer|@reach\/router)[\\/]/,
          priority: 2,
          chunks: 'all',
        },
        purewealthUi: {
          test: /[\\/]node_modules[\\/](purewealth-ui|@material-ui|jss|react-dropzone-uploader|date-fns|react-draggable)[\\/]/,
          priority: 2,
          chunks: 'all',
        }
      }
    }
  },
  plugins: [new MiniCssExtractPlugin(), new CleanWebpackPlugin()]
})
