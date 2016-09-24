/**
 * Created by kelvinsun on 2016/9/24.
 */
'use strict';

module.exports = {
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
        ],
    },
    output: {
        library: 'countdown',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['', '.js'],
    },
};