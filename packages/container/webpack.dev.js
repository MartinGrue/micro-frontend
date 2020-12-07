const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const baseConfig = require("./webpack.base");
const packageJson = require("./package.json");
const paths = require("./paths");

const devConfig = {
  entry: {
    main: "./src/index",
  },
  mode: "development",
  output: {
    path: paths.build,
    filename: "[name].bundle.js",
    publicPath: "/",
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
        marketing: "marketing@http://localhost:1081/remoteEntry.js",
        auth: "auth@http://localhost:1082/remoteEntry.js",
        dashboard: "dashboard@http://localhost:8083/remoteEntry.js",

        // marketing: "marketing",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(baseConfig, devConfig);
