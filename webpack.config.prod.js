const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, "src", 'index.js'),
  output: {
    path: path.join(__dirname, "build")
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx']
  },
  optimization: {
    splitChunks: { chunks: "all"}
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: ["file-loader"]
      },
    ]
  },
  optimization: {
    splitChunks: { chunks: "all" }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    })
  ]
};