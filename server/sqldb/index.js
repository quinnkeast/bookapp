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

// Straightforward models
db.Thing = db.sequelize.import('../api/thing/thing.model');
db.Book = db.sequelize.import('../api/book/book.model');
db.User = db.sequelize.import('../api/user/user.model');
db.Genre = db.sequelize.import('../api/genre/genre.model');
db.Author = db.sequelize.import('../api/author/author.model');

// Suggestions have relations
db.Suggestion = db.sequelize.import('../api/suggestion/suggestion.model');
db.Suggestion.belongsTo(db.User, {as: 'Suggestor'});
db.Suggestion.belongsTo(db.User, {as: 'Suggestee'});
db.Suggestion.belongsTo(db.Book);

// Requests have relations
db.Request = db.sequelize.import('../api/request/request.model');
db.Request.belongsTo(db.User, {as: 'Requestor'});
db.Request.belongsTo(db.Book); // "Reference" book

// Books have many authors and vice versa
db.BookAuthor = db.sequelize.import('./models/bookAuthor.model');
db.Book.belongsToMany(db.Author, { through: db.BookAuthor });
db.Author.belongsToMany(db.Book, { through: db.BookAuthor });

module.exports = db;
