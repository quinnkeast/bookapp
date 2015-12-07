'use strict';

import errors from './components/errors';
import path from 'path';

module.exports = function (app) {
  
  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components)/*')
    .get(errors[404]);

  // All other routes should return a 404
  app.route('/*')
    .get(errors[404]);
}
