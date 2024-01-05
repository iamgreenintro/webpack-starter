const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'), // "bundle" becomes [name]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[contenthash].[name].js', // [name] = "bundle" (from entry obj)
    clean: true, // cleans up ouput
    assetModuleFilename: '[name][ext]', // Needed to keep the original asset name
  },
  devtool: 'source-map', // source map for debugging
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true, // automatically open browser on given port value
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      // *Note: All loaders in the `use` array are passed in order!

      // The style-loader injects CSS into the DOM.
      // The css-loader interprets @import and url() like import/require() and will resolve them.
      // The sass-loader loads the SASS/SCSS files and compiles them to CSS.
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // Needed to be able to handle the asset file types.
      // Having these assets types without the loader will crash the application.
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // Needed to be able to handle font file types.
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      // html-loader for handling local (image) files and resolve them in output directory
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
};
