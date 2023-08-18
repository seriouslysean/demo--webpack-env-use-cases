const config = require('../utils/shared-config');

// Written in ES% because we only transpile the client
// See config/webpack.shared.js

function logSharedEnvs(isServer = false) {
    const env = isServer ? 'Server' : 'Client';

    console.log(`########## SHARED UTILS (logSharedEnvs, ${env}) ##########`);
    console.log('');

    console.log(`----- ENV (Inline, ${env})`);
    console.log('> Variables declared via webpack.EnvironmentPlugin are available on the server and client');
    console.log('process.env.APP_ENV', process.env.APP_ENV);
    console.log('process.env.APP_VERSION', process.env.APP_VERSION);
    console.log('process.env.NODE_ENV', process.env.NODE_ENV);
    console.log('');

    console.log('> All build time environment variables are available on the server and client');
    console.log('> These are added to the server and the client via webpack.EnvironmentPlugin');
    console.log('process.env.APP_BUILDTIME_ENV', process.env.APP_BUILDTIME_ENV);
    console.log('');

    console.log('> All run time environment variables are NOT available on the client');
    console.log('> These are NOT added via webpack.EnvironmentPlugin');
    console.log('process.env.APP_RUNTIME_ENV', 'UNAVAILABLE');
    console.log('');

    console.log('----- Config (Inline, Client)');
    console.log('> Config values are available on the server and client');
    console.log('> These values are build time environment variables proxied from the config');
    console.log('config.env.APP_BUILDTIME_ENV', config.env.APP_BUILDTIME_ENV);
    console.log('config.env.APP_VERSION', config.env.APP_VERSION);
    console.log('');
}

module.exports = {
    logSharedEnvs,
};
