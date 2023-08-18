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
        // The DefinePlugin replaces variables in your code with other values or expressions at compile time.
        // see https://webpack.js.org/plugins/define-plugin/
        // new webpack.DefinePlugin({
        //     'process.env.APP_ENV': '"server"',
        // }),

        // Need to add all envs here to make them available to the client
        // The EnvironmentPlugin is shorthand for using the DefinePlugin on process.env keys
        // see https://webpack.js.org/plugins/environment-plugin/
        new webpack.EnvironmentPlugin({
            APP_ENV: 'server',
        }),
    ],
});

module.exports = serverConfig;
