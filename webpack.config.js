const path = require('path');
const webpack = require('webpack');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

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
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@scss': path.resolve(__dirname, 'src', 'scss')
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
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    host: HOST,
    port: PORT,
    hot: true
  },
};