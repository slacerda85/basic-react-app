const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // mode: "development",
  entry: "./src/index.tsx",
  // devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      templateContent: `
      <div id="root"></div>
      `,
    }),
  ],
  module: {
    rules: [
      {
        // test: /\.m?tsx?$/,
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    preferRelative: true,
  },
  devServer: {
    port: 3000,
    static: "./dist",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
