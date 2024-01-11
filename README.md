# A Webpack 5 Starter Project (Vanilla JS)

### Description:

An extremely basic Webpack 5 starter project setup in Vanilla JS.
This is by no means advanced but can be configured to fit your own needs instead.
The goal was to be able to create a new project without much configuration needed so I could focus on the fun part: **coding**!

## Features

- **Stylesheets have their own entry point.** No need to import it into your app's main entry point via the source code.
- **Development server** configured for optimal speed.
- Webpack configuration for `production` and `development` out of the box.
- Extensive comments in the configuration file for understanding and configuring the project yourself.

### Documentation:

- [Webpack](https://webpack.js.org/concepts/)
- My comments in the configuration files.

## Run Locally

Clone the project

```bash
  git clone https://github.com/iamgreenintro/webpack-starter
```

Go to the project directory

```bash
  cd webpack-starter
```

Install dependencies

```bash
  npm install
```

Start the `development` server

```bash
  npm run dev
```

Build in production mode

```bash
  npm run build // Generates a `dist` directory with static files for deployment.
```
