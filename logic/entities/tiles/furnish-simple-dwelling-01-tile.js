const { TILE_NAME } = require('../../constants');
const { FurnishDwellingTile } = require('./furnish-dwelling-tile');

exports.FurnishSimpleDwelling01Tile = class extends FurnishDwellingTile {
    constructor(player) {
        super(player, TILE_NAME.SIMPLE_DWELLING_01);
    }
}