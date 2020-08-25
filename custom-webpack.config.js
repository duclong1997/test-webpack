const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
module.exports = {
  // entry point
  entry: {
    main: "./src/main.ts",
  },
  // default: folder: ./dist, main output file: ./dist/main.js
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js",
  },
  // loaders
  module: {
    // type: txt
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
    ],
  },

  // add plugins
  plugins: [
    new MomentLocalesPlugin({
      localesToKeep: ["fr"],
    }),
  ],

  // development, production, node
  mode: "development",
};
