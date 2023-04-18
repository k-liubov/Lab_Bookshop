const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js"
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new TerserWebpackPlugin(),
      new CssMinimizerPlugin(), 
      new ESLintPlugin(),
    ],
    optimization: {
      minimize: true,
      minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin()],
    },
    module: {
        rules: [
            { test: /\.css$/,
             use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    esModule: true,
                  },
                },
                'css-loader',] 
              },
              {
                test: /\.scss$/,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ]
              }
            
          ]
    }
}