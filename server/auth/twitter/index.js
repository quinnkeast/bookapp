'use strict';

import express from 'express';
import passport from 'passport';
import auth from '../auth.service';

var router = express.Router();

router
  .get('/', passport.authenticate('twitter', {
    failureRedirect: '/signup', // Not relevant, will have to remove
    session: false
  }))

  .get('/callback', passport.authenticate('twitter', {
    failureRedirect: '/signup', // Not relevant, will have to remove
    session: false
  }), auth.setTokenCookie);

module.exports = router;
