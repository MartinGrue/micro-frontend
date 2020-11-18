const htmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  devServer: { port: 1082 },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: { "./CartIndex": "./src/index" },
      shared: ["faker"],
    }),
    new htmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
