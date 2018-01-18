'use strict';

var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './app.js',
    output: {
        filename: './build/build.js',
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ],
    },
    plugins: [
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development, 
            // ./public directory is being served 
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['public'] }
          })
    ]
};