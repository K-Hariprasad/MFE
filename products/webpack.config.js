const HtmlWebpackPluggin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer : {
        port : 8081,
    },
    plugins: [
        new HtmlWebpackPluggin({
            template : './public/index.html'
        }),
        new ModuleFederationPlugin({
            name : 'products',
            filename : 'remoteEntry.js',
            exposes: {
                './ProductsIndex' : './src/index.js'
            }
        })
    ]
}