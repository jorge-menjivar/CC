const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

const commonConfig = {
  watch: true,
  mode: "development",
  devtool: "inline-source-map",
  // entry: {
  //   watcher: './src/watcher/watcher.ts'
  // },
  // output: {
  //   path: __dirname + '/dist/',
  //   // filename: 'preload.js'
  //   filename: '[name].js'
  // },
  module: {
    rules: [
      // {
      //   test: /\.ts$/,
      //   enforce: 'pre',
      //   loader: 'tslint-loader',
      //   options: {
      //     typeCheck: true,
      //     emitErrors: true
      //   }
      // },
      {
        test: /\.js$|jsx/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.ts$|tsx/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.ttf$/,
        use: ['file-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.json'],
    fallback: {
      "path": false
    }
  }
};

module.exports = [
  Object.assign(
    {
      target: 'web',
      entry: {
        renderer: './src/ts/index.tsx'
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: 'src/templates/index.html',
          publicPath: "/static/dist"
        })
      ]
    },
    commonConfig
  ),
]