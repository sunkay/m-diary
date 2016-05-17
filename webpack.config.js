const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

console.log("NODE_ENV = ", process.env.NODE_ENV);
const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;


const PATHS = {
  app: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'build'),
  style: path.resolve(__dirname, 'style')
};

console.log("webpack PATHS: ", PATHS.app, PATHS.build);

const common = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: 'bundle.js'
  },
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 1000
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    },
    {
      // Test expects a RegExp! Note the slashes!
      test: /\.css$/,
      loaders: ['style', 'css'],
      // Include accepts either a path or an array of paths.
      include: PATHS.app
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};

// Default configuration
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      contentBase: PATHS.build,

      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      devtool: 'eval-source-map',

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',
      headers: { "Access-Control-Allow-Origin": "*" },

      // Parse host and port from env so this is easy to customize.
      //
      // If you use Vagrant or Cloud9, set
      // host: process.env.HOST || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices unlike default
      // localhost
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV':'"development"'
        }
      })
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}
