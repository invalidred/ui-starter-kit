module.exports = () => ({
  module:{
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts']
  }
})