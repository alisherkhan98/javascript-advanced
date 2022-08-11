const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {Dotenv} = require('dotenv-webpack');

module.exports = {
    mode: "development",
    entry: "./src/js/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "docs")
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: "./src/assets/template.html",
        }),
        new Dotenv()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
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