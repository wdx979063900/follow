const { resolve } = require('path');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
    mode: 'development',//production,生产环境
    // 入口文件配置项
    entry: {
        index: './src/index.js',
        index2: './src/index2.js'
    },
    // 出口文件配置项
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: 'http://127.0.0.1:8081/'
    },
    // 模块，例如解读css，图片如何转换压缩
    module: {
        rules: [
            // {
            //     // test:/\.css$/,
            //     // use:['style-loader','css-loader']
            //     test: /\.css$/i,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader'],
            // },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development', // webpack 4 only
                        },
                    },
                    'css-loader',
                ],
            }
            , {
                test: /\.(png|jpg|gif)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 500,
                            outputPath: 'img/',
                            esModule: false//因为file-loader升级5.*以上，与html-withimg-loader冲突
                        }
                    }
                ]
            }, {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            }, {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
                //     use: [
                //         {
                //             loader: MiniCssExtractPlugin.loader,
                //             options: {
                //                 publicPath: 'css/',
                //             },
                //         },
                //         'sass-loader',
                //     ],
            },
            {
                test:/\.(jsx|js)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            'env','react'
                        ]
                    }
                },
                exclude:/node_modules/
            }
        ]
    },
    // 插件，用于生产模板和各项功能
    plugins: [
        new MiniCssExtractPlugin(),
        new webpack.HotModuleReplacementPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'index-title',
            chunks: ['index'],
            minify: {
                removeAttributeQuotes: true,//去掉属性双引号
                collapseWhitespace: false,//折叠空白区域
            },
            hash: true,//为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存
            template: './src/index.html'//要打包html模板路径和名称
        }),
        new HtmlWebpackPlugin({
            filename: 'index2.html',
            title: 'index2-title',
            chunks: ['index2'],
            minify: {
                removeAttributeQuotes: true,//去掉属性双引号
                collapseWhitespace: false,//折叠空白区域
            },
            hash: true,//为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存
            template: './src/index2.html'//要打包html模板路径和名称
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
    // 配置webpack开发服务功能
    devServer: {
        // 设置基本目录结构
        contentBase: path.resolve(__dirname, 'dist'),
        //ip地址
        host: '127.0.0.1',
        //端口号
        port: '8081',
        //服务器压缩是否开启
        compress: true,
        //自动打开浏览器
        open: true,
        //热更新  局部刷新
        hot: true
    }
};