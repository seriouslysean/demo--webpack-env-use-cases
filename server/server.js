const { join } = require('path');
const express = require('express');

const config = require('../utils/shared-config');
const { logSharedEnvs } = require('../utils/shared-utils');

const root = join(__dirname, '..');
const dist = join(root, 'dist');
const public = join(root, 'public');

const app = express();

const port = process.env.PORT || 3000;

const logServerEnvs = () => {
    console.log('########## SERVER UTILS (logServerEnvs, Server) ##########');
    console.log('');

    console.log('----- ENV (Inline, Server)');
    console.log('> Variables declared via webpack.EnvironmentPlugin are available on the server and client');
    console.log('process.env.APP_ENV', process.env.APP_ENV);
    console.log('process.env.APP_VERSION', process.env.APP_VERSION);
    console.log('process.env.NODE_ENV', process.env.NODE_ENV);
    console.log('');

    console.log('> All build time environment variables are available on the server and client');
    console.log('> These are added to the server and the client via webpack.EnvironmentPlugin');
    console.log('process.env.APP_BUILDTIME_ENV', process.env.APP_BUILDTIME_ENV);
    console.log('');

    console.log('> All run time environment variables are ONLY available on the server');
    console.log('> These are NOT added via webpack.EnvironmentPlugin');
    console.log('process.env.APP_RUNTIME_ENV', process.env.APP_RUNTIME_ENV);
    console.log('');

    console.log('----- Config (Inline, Server)');
    console.log('> Config values are available on the server and client');
    console.log('> These values are build time environment variables proxied from the config');
    console.log('config.env.APP_BUILDTIME_ENV', config.env.APP_BUILDTIME_ENV);
    console.log('config.env.APP_VERSION', config.env.APP_VERSION);
    console.log('');
}

app.get('/', (req, res) => {
    logServerEnvs();
    logSharedEnvs(true);
    res.set('Content-Type', 'text/html');
    res.sendFile(join(public, 'index.html'));
});

// Instead of using express.static, manually pass back the client bundle
app.get('/client.bundle.js', (req, res) => {
    res.set('Content-Type', 'application/javascript');
    res.sendFile(join(dist, 'client.bundle.js'));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
