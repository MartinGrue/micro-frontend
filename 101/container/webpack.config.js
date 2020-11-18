const htmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: { port: 1080 },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        products: "products@http://localhost:1081/remoteEntry.js",
        cart: "cart@http://localhost:1082/remoteEntry.js",
      },
    }),
    new htmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
