const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

dotenv.config();

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://${HOST}:${PORT}`,
      'webpack/hot/only-dev-server',
      './src/index.js'
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'cheap-source-map',
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src')
    },
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      TOKEN: JSON.stringify(process.env.TOKEN)
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    host: HOST,
    port: PORT,
    hot: true
  },
};