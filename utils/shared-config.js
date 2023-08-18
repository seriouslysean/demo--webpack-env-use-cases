const { features } = require('./server-utils');

const config = {
    env: {
        // Build time environment variables need to be added to the config so that they can be
        // utilized in the client due to process not being available in the browser
        APP_BUILDTIME_ENV: process.env.APP_BUILDTIME_ENV,
        APP_VERSION: process.env.APP_VERSION,
    },

    features,
};

module.exports = config;
