const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const baseConfig = require("./webpack.base");
const packageJson = require("./package.json");
const paths = require("./paths");

const domain = process.env.PRODUCTION_DOMAIN
const prodConfig = {
  entry: {
    main: "./src/index",
  },
  mode: "production",
  output: {
    path: paths.build,
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },

  devServer: {
    port: 1088,
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
      name: "container",

      filename: "remoteEntry.js",
      // library: { type: "var", name: "container" },

      remotes: {
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
        // marketing: "marketing",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(baseConfig, prodConfig);
