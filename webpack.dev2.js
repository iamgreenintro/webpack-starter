const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // The mode we want to target this script for ('production' or 'development').
  mode: 'development',
  // Our entry point from which webpack should build the dependency graph.
  // Basically checks for modules that each file depends on and builds in that order.
  // See: https://webpack.js.org/concepts/dependency-graph/.
  entry: {
    // This key's name (main) can be used as [name].
    main: path.resolve(__dirname, 'src/index.js'),
    // Define vendor entry points:
    // We can bundle third party modules we use throughout our application (besides node_modules).
    // That way we can reduce the size we need to rebuild/rebundle since vendors usually don't change often.
    // You can see it as an entry point for a library like Bootstrap or jQuery.

    // bootstrap: {
    //   import: path.resolve(__dirname, 'src/vendor/bootstrap.js'),
    //   filename: '[name].[contenthash].bundle.js',
    //   runtime: false,
    // }
  },
  output: {
    // Our output directory will be 'dist'.
    path: path.resolve(__dirname, 'dist'),
    // Name of our bundled output file where [name] represents our entry name.
    // In this example: main.5sdefdf100c94fd5efa81f.bundle.js
    // The content hash changes forcing to reload the newly-named file instead of pulling the same-named cached version.
    filename: '[name].[contenthash].bundle.js',
    // Keep the asset's original source name and extension.
    assetModuleFilename: '[name][ext]',
    // Allow chunks to be loaded on demand (asynchronously).
    asyncChunks: true,
    // Clean up the dist folder before generating a new build.
    clean: true,
  },
  // Webpack build optimization settings for caching:
  // It will give us a bundled runtime file for the files in the matching vendor directory.
  optimization: {
    // Generates a single runtime chunk for long-term caching.
    // The runtime chunk will look like: runtime.6a4a5daaa395814000e1.bundle.js
    runtimeChunk: 'single',
    splitChunks: {
      // Separate the third party dependencies into chunks for caching:
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
};
