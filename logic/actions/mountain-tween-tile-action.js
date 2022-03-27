const { MountainTile, MOUNTAIN_TILE_NAME } = require('../entities/mountain-tile.js');
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

exports.MountainTweenTileAction = class extends AbstractAction {
    constructor(availableTiles) {
        super();
        this.availableTiles = availableTiles;
    }

    use(dwarf, params) {
        // TODO: validate if it is a correct move
        const { player } = dwarf;
        const placeTweenTileAction = {
            'CT': (cell, direction) => {    // Cavern - Tunnel Tween tile
                const tile1 = new MountainTile(MOUNTAIN_TILE_NAME.C);
                player.mountain.placeTile(tile1, cell);
                const tile2 = new MountainTile(MOUNTAIN_TILE_NAME.T);
                console.log('FUNCTION CT', cell, direction, tile1, tile2);
                player.mountain.placeTile(tile2, calculateNeighborCell(cell, direction));
            },
            'CC': (cell, direction) => {    // Cavern - Cavern Tween tile
                const tile1 = new MountainTile(MOUNTAIN_TILE_NAME.C);
                player.mountain.placeTile(tile1, cell);
                const tile2 = new MountainTile(MOUNTAIN_TILE_NAME.C);
                player.mountain.placeTile(tile2, calculateNeighborCell(cell, direction));
            },
            'DO': (cell, direction) => {    // Deep tunnel - Ore Mine Tween tile
                const tile1 = new MountainTile(MOUNTAIN_TILE_NAME.D);
                player.mountain.placeTile(tile1, cell);
                const tile2 = new MountainTile(MOUNTAIN_TILE_NAME.O);
                player.mountain.placeTile(tile2, calculateNeighborCell(cell, direction));
            }
        };
        
        const { name, cell, direction } = params;
        placeTweenTileAction[name](cell, direction);
    }
}
