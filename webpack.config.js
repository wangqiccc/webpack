const HtmlWebpackPlugin=require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack=require("webpack");
module.exports={
    entry: "./src/index.js",//配置唯一入口文件
    output: {
        path: __dirname + "/build",//打包之后存放的地方
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        inline: true,//实时刷新
        port:9000,
    },
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{loader:'css-loader',options:{modules:true}},'postcss-loader']
                })
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new ExtractTextPlugin("style.css"),
        new webpack.optimize.UglifyJsPlugin()
    ]
}