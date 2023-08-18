const dotenv = require('dotenv');
const webpack = require('webpack');
const { readFileSync } = require('fs');
const { join, resolve } = require('path');

const { version: appVersion } = require('../package.json');

const nodeEnv = process.env.NODE_ENV || 'development';

const root = join(__dirname, '..');

const paths = {
    root,
    client: join(root, 'client'),
    config: join(root, 'config'),
    dist: join(root, 'dist'),
    public: '/',
    server: join(root, 'server'),
    utils: join(root, 'utils'),
};

const appEnv = dotenv.parse(readFileSync(join(paths.config, '.env.build'), 'utf8'));

function getSharedConfig(isServer) {
    return {
        mode: 'development',
        output: {
            path: resolve(paths.root, `./dist/`),
            publicPath: paths.public,
            // [name].[contenthash].js for prod
            filename: '[name].js',
            // 'async/[name].[contenthash].js' for prod
            chunkFilename: 'async/[name].js',
        },
        resolve: {
            alias: {
                '~config': paths.config,
                '~utils': paths.utils,
            },
            extensions: ['.js'],
        },
        module: {
            rules: [
                // Only transpile the client side code
                ...(!isServer
                    ? [
                          {
                              test: /\.js$/,
                              loader: 'babel-loader',
                              exclude: /node_modules/,
                          },
                      ]
                    : []),
            ],
        },

        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(nodeEnv),
            }),

            // Need to add all envs here to make them available to the client
            new webpack.EnvironmentPlugin({
                APP_VERSION: appVersion,
                ...appEnv,
            }),
        ],

        stats: {
            errorDetails: true,
        },
    };
}

module.exports = {
    getSharedConfig,
};
