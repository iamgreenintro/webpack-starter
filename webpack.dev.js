const path = require('path');

module.exports = {
  // Specify the mode we want to run in:
  // 1. 'production', this is the default value when no mode is specified.
  // 2. 'development'.
  // 3. 'none', opts out of any default optimization options that come with either 'production' or 'development' mode.
  mode: 'development',

  // Our entry points from which webpack will build a dependency graph.
  // Basically checks for modules that each file depends on and builds application in that order.
  // See: https://webpack.js.org/concepts/dependency-graph/.
  // Each entry point's key is also it's chunk name and can be referenced as [name] within it's entry point scope.
  entry: {
    // Define our main entry point:
    main: {
      // When resolving the path to the entry file/module we load upon startup, it expects:
      // 1. You have this webpack configuration file in the root of your project's directory.
      // 2. You have a directory named 'src' inside of the root of your project's directory.
      // 3. Your entry script is inside of the above mentioned 'src' directory and is called 'index.js'.
      import: path.resolve(__dirname, 'src/index.js'),

      // The name of the bundled output file where:
      // 1. The [name] stands for 'main' as per the key above that resolves the path to our entry file.
      // 2. The [contenthash] is a changing hash allowing to bypass same-named cached files (which can lead to not seeing latest changes).
      // 3. When compiled will be named "main.5sdefdf100c94fd5efa81f.bundle.js", aside from the content hash changing.
      filename: '[name].[contenthash].bundle.js',

      // The runtime setting takes two possible values, being:
      // 1. false -> When generating it inline in the entry chunk we specified above.
      // 2. The file name as a string value, which represents the new runtime bundle it will generate.
      // We do not need it when using development mode and want to focus on fast builds, generating that extra runtime bundle adds time.
      runtime: false,
    },
  },

  // Our output settings will define how and where webpack generates our bundled files.
  // By default the value is set to './dist/main.js' for the main entry file.
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
};
