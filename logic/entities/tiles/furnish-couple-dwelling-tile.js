const { TILE_NAME } = require('../../constants');
const { FurnishDwellingTile } = require('./furnish-dwelling-tile');

exports.FurnishCoupleDwellingTile = class extends FurnishDwellingTile {
    constructor(player) {
        super(player, TILE_NAME.MIXED_DWELLING);
    }

    get points() {
        return 5;
    }

    get dwarfCapacity() {
        return 2;
    }
}