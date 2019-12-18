const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)
const presetConfig = require('./build-utils/loadPresets')

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  console.log('mode', mode, 'presets', presets)
  return webpackMerge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.(png|jpe?g|svg)$/,
            use: {
              loader: 'file-loader',
              options: {
                name: 'assets/[name].[ext]',
              }
            },
          },
        ],
      },
      resolve: {
        extensions: ['.js', '.json'],
      },
      output: {
        filename: 'bundle.js',
        chunkFilename: '[name].lazy-chunk.js',
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './build-utils/template.html',
        }),
        new webpack.ProgressPlugin(),
      ],
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  )
}
