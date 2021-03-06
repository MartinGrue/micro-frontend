const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const baseConfig = require("./webpack.base");
const packageJson = require("./package.json");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/marketing/latest/",
  },
  devServer: {
    port: 1081,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html", // output file
    }),
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",

      exposes: {
        "./bootstrap": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(baseConfig, prodConfig);
