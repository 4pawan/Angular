

var path = require("path");

module.exports = {
    context: path.resolve(__dirname, "./Scripts/src"),
    resolve: {
        extensions: ['.ts']
    },
    entry: {
        main: './main'
    },
    output: {
        publicPath: '/Scripts/dist',
        path: path.resolve(__dirname, './Scripts/dist'),
        filename: '[name].build.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
};



//"use strict";

//module.exports = {
//    entry: "./src/file.js",
//    output: {
//        filename: "./dist/bundle.js"
//    },
//    devServer: {
//        contentBase: ".",
//        host: "localhost",
//        port: 9000
//    },
//    module: {
//        loaders: [
//            {
//                test: /\.jsx?$/,
//                loader: "babel-loader"
//            }
//        ]
//    }
//};