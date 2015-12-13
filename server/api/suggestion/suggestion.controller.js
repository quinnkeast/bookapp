/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/Suggestions              ->  index
 * POST    /api/Suggestions              ->  create
 * GET     /api/Suggestions/:id          ->  show
 * PUT     /api/Suggestions/:id          ->  update
 * DELETE  /api/Suggestions/:id          ->  destroy
 */

import _ from 'lodash';
import sqldb, {Suggestion} from '../../sqldb';

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

// Gets a list of Suggestions
exports.index = function(req, res) {
  Suggestion.findAll()
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Gets a single Suggestion from the DB
exports.show = function(req, res) {
  Suggestion.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Creates a new Suggestion in the DB
exports.create = function(req, res) {
  Suggestion.create(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
};

// Updates an existing Suggestion in the DB
exports.update = function(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Suggestion.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Deletes a Suggestion from the DB
exports.destroy = function(req, res) {
  Suggestion.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
};
