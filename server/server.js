const { join } = require('path');
const express = require('express');

const { logSharedEnvs } = require('../utils/shared-utils');

const root = join(__dirname, '..');
const dist = join(root, 'dist');
const public = join(root, 'public');

const app = express();

const port = process.env.PORT || 3000;

const logServerEnvs = () => {
    console.log('----- ENV (Inline, Server)');
    console.log('process.env.APP_BUILDTIME_ENV', process.env.APP_BUILDTIME_ENV);
    console.log('process.env.APP_ENV', process.env.APP_ENV);
    console.log('process.env.APP_VERSION', process.env.APP_VERSION);
}

app.get('/', (req, res) => {
    logServerEnvs();
    logSharedEnvs();
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
