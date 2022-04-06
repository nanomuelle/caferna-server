'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.createGame = function createGame (req, res, next) {
  Default.createGame()
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

module.exports.getPlayer = function getPlayer (req, res, next, gameId, playerId) {
    Default.getPlayer(gameId, playerId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            //res.send(405, response);
            res.status(405).send(response)
            // utils.writeJson(res, response);
        });
};

module.exports.useSpace = function useSpace (req, res, next, body, gameId) {
    Default.useSpace(gameId, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            //res.send(405, response);
            res.status(405).send(response)
            // utils.writeJson(res, response);
        });
};