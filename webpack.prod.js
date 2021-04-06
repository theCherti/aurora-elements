const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    standalone: './src/standalone.js',
    showcase: './src/showcase.js'
  },
  plugins: [
    new CleanWebpackPlugin({
        patterns: [{from: './src/showcase', to: 'showcase'}]
    }),
    new HtmlWebpackPlugin({
        chunks: ['showcase'],
        template: './src/showcase.html'
    }),
    new CopyWebpackPlugin({
      patterns: [{from: './src/showcase', to: 'showcase'}]
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};