/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

const db = {
  Sequelize: Sequelize,
  sequelize: new Sequelize(config.sequelize.dbname, config.sequelize.username, config.sequelize.password, config.sequelize.options)
};

// Insert models below
db.Thing = db.sequelize.import('../api/thing/thing.model');
db.User = db.sequelize.import('../api/user/user.model');

module.exports = db;
