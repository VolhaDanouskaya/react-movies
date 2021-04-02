const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  mode: "development",
  devtool: 'inline-source-map',
  entry: path.join(__dirname, "src", 'index.js'),
  output: {
      path: path.join(__dirname, "build")
  },
  resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 9000,
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
  plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html")
      })
  ]
};