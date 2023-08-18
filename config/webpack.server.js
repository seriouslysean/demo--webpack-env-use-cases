const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');

const { getSharedConfig } = require('./webpack.shared');

const serverConfig = merge(getSharedConfig(true), {
    name: 'vue-ssr-bundle',
    // webpack runs from root, so entry needs to be relative to it
    entry: './server/server.js',
    output: {
        filename: 'server.bundle.js',
        library: {
            type: 'commonjs2',
        },
    },
    devtool: false,
    target: 'node18.13',
    externals: [nodeExternals()],
    plugins: [
        new webpack.DefinePlugin({
            'process.env.JS_ENV': 'server',
        }),
    ],
});

module.exports = serverConfig;