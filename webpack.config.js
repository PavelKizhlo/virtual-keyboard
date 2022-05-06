const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: './favicon.ico',
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: './assets',
                    to: path.resolve(__dirname, 'dist/assets')
                },
                {
                    from: './styles/CSS/style.css',
                    to: path.resolve(__dirname, 'dist/CSS')
                }
            ]
        })
    ]
}