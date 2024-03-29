/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/Genres              ->  index
 * POST    /api/Genres              ->  create
 * GET     /api/Genres/:id          ->  show
 * PUT     /api/Genres/:id          ->  update
 * DELETE  /api/Genres/:id          ->  destroy
 */

import _ from 'lodash';
import sqldb, {Genre} from '../../sqldb';

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    return entity.updateAttributes(updates)
      .then(function(updated) {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.destroy()
        .then(function() {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Genres
exports.index = function(req, res) {
  Genre.findAll()
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Gets a single Genre from the DB
exports.show = function(req, res) {
  Genre.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Creates a new Genre in the DB
exports.create = function(req, res) {
  Genre.create(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
};

// Updates an existing Genre in the DB
exports.update = function(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Genre.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Deletes a Genre from the DB
exports.destroy = function(req, res) {
  Genre.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
};
