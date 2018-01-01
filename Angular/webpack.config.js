﻿

var path = require("path");

module.exports = {
    context: path.resolve(__dirname, "./Scripts/src"),
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    entry: {
        main: "./main"
    },
    //devtool: "inline-source-map",
    output: {
        publicPath: "/Scripts/dist",
        path: path.resolve(__dirname, "./Scripts/dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
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