const { TILE_NAME } = require('../../constants');
const { ForestTile } = require('./forest-tile');

exports.ForestFieldTile = class extends ForestTile {
    constructor(player) {
        super(player, TILE_NAME.f);
    }
}