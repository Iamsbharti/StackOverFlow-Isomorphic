const path = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  entry: ["babel-regenerator-runtime", path.resolve(__dirname, "./src/index")],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        WEBPACK: true,
      },
    }),
    //new webpack.optimize.UglifyJsPlugin(),
    new UglifyJSPlugin(),
  ],
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  module: {
    loaders: [
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
