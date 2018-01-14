
var path = require('path');

module.exports = {
    entry: path.join(__dirname,  'src/client.js'),
    output: {
      path: path.join(__dirname,  'public'),
      filename: 'bundle.js'       
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.json'] 
    }
  };
  