'use strict';

import path from 'path';
import _ from 'lodash';

function requiredProcessEnv (name) {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable.');
  }
  return process.env[name];
}

// All configurations will extend these options
// ————————————————————————————————————————————
const all = {
  env: process.env.NODE_ENV,

  // Root path of the server
  root: path.normalize(__dirname + '/../../..'),

  // Server port
  port: process.env.PORT || 9000,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Should we populate the DB with sample data?
  seedDB: false,

  // Secret for session; change this and make it an environment variable
  secrets: {
    session: 'bookapp-secret'
  },

  twitter: {
    clientID: process.env.TWITTER_ID || 'id',
    clientSecret: process.env.TWITTER_SECRET || 'secret',
    callbackURL: (process.env.DOMAIN || '') + '/auth/twitter/callback'
  }
};

// Export the config object based on the NODE_ENV
// ——————————————————————————————————————————————
export default _.merge(
  all,
  require('./shared'),
  require('./' + process.env.NODE_ENV + '.js') || {});
