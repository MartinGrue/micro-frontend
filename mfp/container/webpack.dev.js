const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const baseConfig = require("./webpack.base");
const packageJson = require("./package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:1088/",
  },
  devServer: {
    port: 1088,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      filename: "remoteEntry.js",
      remotes: {
        marketing: "marketing@http://localhost:1081/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(baseConfig, devConfig);
