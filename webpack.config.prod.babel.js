const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  mode: "production",
  entry: ["babel-regenerator-runtime", path.resolve(__dirname, "./src/index")],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        include: /\/includes/,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true,
        },
        sourceMap: true,
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        WEBPACK: true,
      },
    }),
    //new webpack.optimize.UglifyJsPlugin(),
    //new UglifyJSPlugin(),
  ],
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: "babel-loader",
        },
        include: path.resolve(__dirname, "src"),
      },
    ],
  },
};
