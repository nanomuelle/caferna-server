exports.Forest = class {
    constructor(player) {
        this.player = player;
        this.cells = [
            'x', 'x', 'x', 'x', 
            'x', 'F', 'F', 'b',
            'x', 'F', 'F', 'F',
            'x', 'b', 'F', 'F',
            'x', 'F', 'f', '<',
            'x', 'x', 'x', 'x',
        ];
    }

    placeTile(tile, index) {
        // TODO: implement logic to avoid illegal moves
        this.cells[index] = tile.name;
    }
}
