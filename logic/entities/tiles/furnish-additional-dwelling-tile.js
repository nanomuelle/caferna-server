const { TILE_NAME } = require('../../constants');
const { FurnishDwellingTile } = require('./furnish-dwelling-tile');

exports.FurnishAdditionalDwellingTile = class extends FurnishDwellingTile {
    constructor(player) {
        super(player, TILE_NAME.MIXED_DWELLING);
    }

    get points() {
        return 5;
    }

    get dwarfCapacity() {
        return this.player.dwarfs.length === 5 ? 1 : 0;
    }
}