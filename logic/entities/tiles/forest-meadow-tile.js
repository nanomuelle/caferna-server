const { TILE_NAME } = require('../../constants');
const { ForestTile } = require('./forest-tile');

exports.ForestMeadowTile = class extends ForestTile {
    constructor(player) {
        super(player, TILE_NAME.m);
    }
}