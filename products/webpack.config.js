const HtmlWebpackPluggin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    devServer : {
        port : 8081,
    },
    plugins: [
        new HtmlWebpackPluggin({
            template : './public/index.html'
        })
    ]
}