const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = (env) => {
  return {
    entry: ["./src/index"],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "assets/[name].bundle.js",
      publicPath: "/",
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            ecma: 6,
          },
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /(node_modules)/,
          loader: "babel-loader",
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: !!env.production
                ? MiniCssExtractPlugin.loader
                : "style-loader",
            },
            {
              loader: "css-loader",
            },
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
    devServer: {
      contentBase: "./dist",
      hotOnly: true,
      port: 3000,
      historyApiFallback: true,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin([{ from: "public/assets", to: "assets" }]),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "assets/[name].css",
        chunkFilename: "assets/[id].css",
      }),
    ],
  };
};
