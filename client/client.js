import config from '~utils/shared-config';
import { features } from '~utils/server-utils';
import { logSharedEnvs } from '~utils/shared-utils';

const logClientEnvs = () => {
    console.log(`########## CLIENT UTILS (logClientEnvs, Client) ##########`);
    console.log('');

    console.log('----- ENV (Inline, Client)');
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
    // This uses a value from the server utils
    console.log('features', config.features);
    console.log('');

    console.log('> This is from the server utils');
    console.log('features', features);
    console.log('');
}

logClientEnvs();
logSharedEnvs();
