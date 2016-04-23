var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var basePath = __dirname;

module.exports = {

    context: path.join(basePath, "src"),

    resolve: {
        extensions: ['','.js', '.ts', '.tsx']
    },

    entry: [
        './index.tsx',
        './css/styles.css',
        '../node_modules/bootstrap/dist/css/bootstrap.css'
    ],

    output: {
        path: path.join(basePath, "dist"),
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: './dist',
        inline: true,
        host: 'localhost',
        port: 8080
    },

    devtool: 'inline-source-map',

    module: {
        preloaders: [
          {
              test: /\.ts$/,
              loader: 'tslint'
          }
        ],
        loaders: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            },
            {
                test: /\.(gif|jpg|png)$/,
                include: path.join(basePath, "src/images"),
                loader: 'url-loader?limit=100000'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        new ExtractTextPlugin('bundle.css'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}