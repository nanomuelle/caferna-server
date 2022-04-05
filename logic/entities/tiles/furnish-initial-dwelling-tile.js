const { TILE_NAME } = require('../../constants');
const { FurnishDwellingTile } = require('./furnish-dwelling-tile');

exports.FurnishInitialDwellingTile = class extends FurnishDwellingTile {
    constructor(player) {
        super(player, TILE_NAME.I);
    }

    get points() {
        return 0;
    }

    get dwarfCapacity() {
        return 2;
    }
}