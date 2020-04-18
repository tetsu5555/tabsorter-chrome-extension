const path = require('path');

module.exports = {
  mode: 'development',
  context: __dirname + '/src',
  entry: {
    content: "./content/content.js",
    background: "./background/background.js",
    popup: "./popup/popup.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  }
}