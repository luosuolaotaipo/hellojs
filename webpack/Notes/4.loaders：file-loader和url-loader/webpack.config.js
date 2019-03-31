const path=require('path');

module.exports={
  mode: 'development',
  entry: './src/js/index',
  output: {
    path: path.resolve(__dirname, 'dest'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      //css
      {test: /\.css$/i, use: ['style-loader', 'css-loader']},

      //图片
      /*{test: /\.(jpg|png|gif)$/i, use: {
        loader: 'file-loader',
        options: {
          outputPath: 'imgs/',      //相对于output.path
          publicPath: 'dest/imgs/'  //输出到css的路径
        }
      }},*/
      {test: /\.(jpg|png|gif)$/i, use: {
        loader: 'url-loader',
        options: {
          outputPath: 'imgs/',      //相对于output.path
          publicPath: 'dest/imgs/', //输出到css的路径
          limit: 4*1024
        }
      }},

      //字体文件
      {test: /\.(eot|svg|ttf|woff|woff2)$/i, use: {
        loader: 'url-loader',
        options: {
          outputPath: 'fonts/',
          publicPath: 'dest/fonts/',
          limit: 4*1024
        }
      }},
    ]
  }
};
