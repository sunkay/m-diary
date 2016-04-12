var nodeExternals = require('webpack-node-externals');
//var Config = JSON.stringify(require('./config.dev.json'));

module.exports = {
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals(),
  ], // in order to ignore all modules in node_modules folder
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    },
    {
      // Test expects a RegExp! Note the slashes!
      test: /\.css$/,
      loaders: ['style', 'css'],
    }]
  }
};
