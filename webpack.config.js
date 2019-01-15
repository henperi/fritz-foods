const path = require('path');

module.exports = {
  // entry: './src/store/createStore.js',
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  mode: 'development',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
  },
};
