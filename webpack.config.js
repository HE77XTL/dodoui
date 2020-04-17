const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: "DoDoUI",
        libraryTarget: 'umd'
    },
    plugins: [new HtmlWebpackPlugin({
        title: "DoDoUI",
        template: "index.html"
    })],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
}