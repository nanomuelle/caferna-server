const { ForestTile, FOREST_TILE_NAME } = require('../entities/forest-tile.js');
const { AbstractAction } = require('./abstract-action.js');

const DIRECTION = {
    LEFT: 'l',
    RIGHT: 'r',
    TOP: 't',
    BOTTOM: 'b'
}
const calculateNeighborCell = (cell, direction) => {
    const calculate = {
        [DIRECTION.LEFT]: cell => cell - 1,
        [DIRECTION.RIGHT]: cell => cell + 1,
        [DIRECTION.TOP]: cell => cell - 4,
        [DIRECTION.BOTTOM]: cell => cell + 4,
    }
    return calculate[direction](cell);
};

exports.ForestTweenTileAction = class extends AbstractAction {
    constructor(name) {
        super();
        this.name = name;
    }

    use(dwarf, params) {
        // TODO: validate if it is a correct move
        const { player } = dwarf;
        const placeTweenTileAction = {
            'MF': (cell, direction) => {    // Meadow - Field Tween tile
                const tile1 = new ForestTile(FOREST_TILE_NAME.m);
                player.forest.placeTile(tile1);
                const tile2 = new ForestTile(FOREST_TILE_NAME._);
                player.forest.placeTile(tile2, calculateNeighborCell(cell, direction));
            },
            'PP': (cell, direction) => {    // Big Pasture Tween tile
                const { cell, direction } = params;
                const tile1 = new ForestTile(FOREST_TILE_NAME.P);
                player.forest.placeTile(tile1);
                const tile2 = new ForestTile(FOREST_TILE_NAME.P);
                tile1.tweenCell = tile2.cell;
                tile2.tweenCell = tile1.cell;
                player.forest.placeTile(tile2, calculateNeighborCell(cell, direction));
            }
        };

        const {cell, direction } = params;
        placeTweenTileAction[this.name](cell, direction);
    }
}
