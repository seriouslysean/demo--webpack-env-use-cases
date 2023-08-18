// Written in ES% because we only transpile the client
// See config/webpack.shared.js

function logSharedEnvs(isServer = false) {
    console.log(`----- ENV (Imported, ${isServer ? 'Server' : 'Client'})`);
    console.log('process.env.APP_BUILDTIME_ENV', process.env.APP_BUILDTIME_ENV);
    console.log('process.env.APP_ENV', process.env.APP_ENV);
    console.log('process.env.APP_VERSION', process.env.APP_VERSION);
}

module.exports = {
    logSharedEnvs,
};
