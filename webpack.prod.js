const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: "production",
    entry: "./src/js/index.js",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "docs")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/assets/template.html",
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        new Dotenv(),
    ],

    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ],
    },
      
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
        ]
    },
}