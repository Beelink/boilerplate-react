const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.babel.js");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  devtool: "cheap-module-source-map",
  mode: "production",
  output: {
    path: __dirname + "/public/build/",
    publicPath: "/static/client/public/build/",
    filename: "bundle.js",
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        terserOptions: {
          compress: {
            inline: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 0,
      minRatio: 1,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new webpack.DefinePlugin({
      __config: JSON.stringify({
        apiPrefix: "https://stage.kerenor4child.org/api/v1",
        imagePrefix: "https://stage.kerenor4child.org/static"
      }),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
        exclude: [/node_modules/, /public/],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          { 
            loader: 'scoped-css-loader' 
          },
          {
            loader: "sass-loader?sourceMap",
          },
          
        ],
        exclude: [/node_modules/, /public/],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "file-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          { 
            loader: 'scoped-css-loader' 
          },
          {
            loader: "sass-loader?sourceMap",
          },
        ],
        exclude: [/node_modules/, /public/],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
        exclude: [/node_modules/, /public/],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
});
