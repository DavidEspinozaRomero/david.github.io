const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
  mode: "production",
  entry: {
    home: path.resolve(__dirname,"./src/js/mobile.js")
  },
  output: {
    path: path.resolve(__dirname,"dist/js"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: "test",
    //   template: "./src/index.html",
    //   filename: "[name].html"
    // }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
};