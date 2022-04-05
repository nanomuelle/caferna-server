const { TILE_NAME } = require('../../constants.js');
const { ForestTile } = require('./forest-tile.js');

exports.ForestOuterTile = class extends ForestTile {
    constructor(player) {
        super(player, TILE_NAME.x);
    }
}