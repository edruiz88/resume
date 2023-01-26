var path = require('path');

module.exports = {
  // mode: 'development',
  mode: 'production',
  entry:  './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public/js/'),
    filename: 'app.js',
    hashFunction: 'xxhash64'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  }
}