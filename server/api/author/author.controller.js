/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/Authors              ->  index
 * POST    /api/Authors              ->  create
 * GET     /api/Authors/:id          ->  show
 * PUT     /api/Authors/:id          ->  update
 * DELETE  /api/Authors/:id          ->  destroy
 */

import _ from 'lodash';
import sqldb, {Author} from '../../sqldb';

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

// Gets a list of Authors
exports.index = function(req, res) {
  Author.findAll()
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Gets a single Author from the DB
exports.show = function(req, res) {
  Author.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Creates a new Author in the DB
exports.create = function(req, res) {
  Author.create(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
};

// Updates an existing Author in the DB
exports.update = function(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Author.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Deletes a Author from the DB
exports.destroy = function(req, res) {
  Author.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
};
