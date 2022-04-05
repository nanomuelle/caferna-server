const { TILE_NAME } = require('../../constants');
const { FurnishTile } = require('./furnish-tile');

exports.FurnishDwellingTile = class extends FurnishTile {
    constructor(player, name) {
        super(player, name || TILE_NAME.DWELLING);
    }

    get points() {
        return 3;
    }

    get dwarfCapacity() {
        return 1;
    }
}