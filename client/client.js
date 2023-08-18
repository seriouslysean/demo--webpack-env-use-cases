import { logSharedEnvs } from '~utils/shared-utils';

const logClientEnvs = () => {
    console.log('----- ENV (Inline, Client)');
    console.log('process.env.APP_BUILDTIME_ENV', process.env.APP_BUILDTIME_ENV);
    console.log('process.env.APP_ENV', process.env.APP_ENV);
    console.log('process.env.APP_VERSION', process.env.APP_VERSION);
}

logClientEnvs();
logSharedEnvs();
