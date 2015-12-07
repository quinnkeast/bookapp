'use strict';

import express from 'express';
import sqldb from './sqldb';
import config from './config/environment';
import http from 'http';
import colors from 'colors';

// Populate database with sample data
if (config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();
var server = http.createServer(app);
var socketio = require('socket.io')(server, {
  serveClient: config.env !== 'production',
  path: '/socket.io-client'
});
require('./config/socketio')(socketio);
require('./config/express')(app);
require('./routes')(app);

// Start server
function startServer () {
  server.listen(config.port, config.ip, () => console.log('Express server listening on %d, in %s mode'.underline.green, config.port, app.get('env')));
}

sqldb.sequelize.sync()
  .then(startServer)
  .catch(err => console.log('Server failed to start due to error: %s'.underline.red, err));

// Expose app
export default app;
