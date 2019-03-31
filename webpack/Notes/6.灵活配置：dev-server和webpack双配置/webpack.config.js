const path=require('path');

module.exports=function (env, argv){
  env=env||{development: true};

  return {
    entry: './src/js/index',
    module: {
      rules: [
        {test: /\.css$/i, use: ['style-loader', 'css-loader']},
        {test: /\.(png|jpg|gif)$/i, use: {
          loader: 'url-loader',
          options: {
            outputPath: 'imgs/',
            limit: 4*1024
          }
        }}
      ]
    },
    ...env.production?require('./config/webpack.production'):require('./config/webpack.development')
  };
};

/*
module.exports={
  mode: 'development',
  entry: './src/js/index',
  output: {
    path: path.resolve(__dirname, 'dest'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.css$/i, use: ['style-loader', 'css-loader']},
      {test: /\.(png|jpg|gif)$/i, use: {
        loader: 'url-loader',
        options: {
          outputPath: 'imgs/',
          //publicPath: 'dest/imgs/',
          limit: 4*1024
        }
      }}
    ]
  }
};*/
