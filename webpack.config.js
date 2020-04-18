const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');
const ExtensionReloader = require('webpack-extension-reloader');

module.exports = {
  mode: process.env.NODE_ENV || "development",
  context: path.resolve(__dirname, "src"),
  entry: {
    "content/content": "./content/content.js",
    "background/background": "./background/background.js",
    "popup/popup": "./popup/popup.js",
    "popup/popup-main": "./popup/popup-main.js",
    "popup/popup-chrome": "./popup/popup-chrome.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin([
      { from: "assets", to: "assets" },
      { from: "./popup/popup.html", to: "popup" },
      { from: "./popup/popup.css", to: "popup" },
      { from: "./manifest.json", to: "" },
    ]),
    new ExtensionReloader({
      manifest: __dirname + '/src/manifest.json',
    }),
  ],
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loaders: [
          'vue-loader'
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  }
}