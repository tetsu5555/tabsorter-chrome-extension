const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  context: path.resolve(__dirname, "src"),
  entry: {
    "content/content": "./content/content.js",
    "background/background": "./background/background.js",
    "popup/popup": "./popup/popup.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  plugins: [
    new CopyPlugin([
      { from: "assets", to: "assets" },
      { from: "./popup/popup.html", to: "popup" },
      { from: "./manifest.json", to: "" },
    ]),
  ],
}