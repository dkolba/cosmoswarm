var webpack = require('webpack');
console.log('NODE_ENV is set to: ' + process.env.NODE_ENV);

function SetEnv(){
  if(process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    return {'process.env.NODE_ENV': '"development"'};
  }
  else if (process.env.NODE_ENV === 'production') {
    return {'process.env.NODE_ENV': '"production"'};
  }
}

module.exports = {
  entry: {
    app: ['./www/js/app']
  },
  output: {
    path: __dirname + '/www/js/',
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  externals: {
    "phaser": "Phaser"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "6to5-loader"}
    ]
  },
  plugins: [
    //new webpack.DefinePlugin(SetEnv())
  ]
};
