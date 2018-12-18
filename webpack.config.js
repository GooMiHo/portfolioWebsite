var path = require('path');
module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '.'),
    compress: true,
    port: 8080
  }
};
