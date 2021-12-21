const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = (env) => {
    return {
        devtool: 'cheap-module-eval-source-map', // source maps make debugging easier
        devServer: {
        contentBase: path.join(__dirname, "public/"),
        compress: true,
        historyApiFallback: true,
        port: 9000,
        watchContentBase: true,
        progress: true
        },
        entry: "./src/js/index.js",
        mode: env.mode,
        module: {
        rules: [
            {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "babel-loader"
            }
            }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
            }, {
            test: /\.(jpg|png|ttf)$/,
            use: {
                loader: 'url-loader',
            },
            }
        ]
        },
        output: {
        path: path.join(__dirname, 'public/'),
        filename: "bundle.js",
        },
        plugins: [
        new Dotenv({
            path: path.join(__dirname, `${env.mode === "development" ? ".env.development" : ".env"}`)
        })
        ]
    }
};