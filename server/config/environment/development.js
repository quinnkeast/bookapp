// Development-specific configuration
// ——————————————————————————————————

module.exports = {
  sequelize: {
    dbname: 'bookapp',
    username: process.env.PG_USER || 'tester',
    password: process.env.PG_PASS || 'testpassword',

    options: {
      dialect: 'postgres',
      port: process.env.PG_PORT || 5432,
      logging: false
    }
  },
  seedDB: true // Seed database on startup?
};
