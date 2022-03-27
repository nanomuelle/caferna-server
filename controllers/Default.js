'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.createGame = function createGame (req, res, next, body) {
  Default.createGame(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listGames = function listGames (req, res, next) {
    console.log('controllers listGames')
  Default.listGames()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listGameSpaces = function listGameSpaces (req, res, next, gameId) {
    Default.listGameSpaces(gameId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.listGamePlayers = function listGamePlayers (req, res, next, gameId) {
    Default.listGamePlayers(gameId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.useSpace = function useSpace (req, res, next, gameId, spaceId, playerId, dwarfId) {
    Default.useSpace(gameId, spaceId, playerId, dwarfId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            res.send(405, response);
            // utils.writeJson(res, response);
        });
};