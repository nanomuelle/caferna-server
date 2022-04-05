const { TILE_NAME } = require('../../constants');
const { FurnishDwellingTile } = require('./furnish-dwelling-tile');

exports.FurnishSimpleDwelling02Tile = class extends FurnishDwellingTile {
    constructor(player) {
        super(player, TILE_NAME.SIMPLE_DWELLING_02);
    }
}