const webpack = require('webpack');
const { merge } = require('webpack-merge');

const { getSharedConfig } = require('./webpack.shared');

const serverConfig = merge(getSharedConfig(false), {
    name: 'app-client',
    // webpack runs from root, so entry needs to be relative to it
    entry: './client/client.js',
    output: {
        filename: 'client.bundle.js',
    },
    devtool: 'inline-source-map',
    node: false,
    target: 'browserslist',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.JS_ENV': 'client',
        }),
    ],
});

module.exports = serverConfig;
