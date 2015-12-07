'use strict';

// Production-specific configuration
// —————————————————————————————————

module.exports = {
  // Server IP
  ip: process.env.IP || undefined,

  // Server port
  port: process.env.PORT || 8080,

  sequelize: {
    dbname: 'bookapp',
    username: process.env.PG_USER,
    password: process.env.PG_PASS,
    uri: process.env.SEQUELIZE_URI || 'sqlite://',
    options: {
      dialect: 'postgres',
      port: process.env.PG_PORT,
      logging: false
    }
  }
};
