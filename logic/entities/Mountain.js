exports.Mountain = class {
    constructor(player) {
        this.player = player;
        this.cells = [
            'x', 'x', 'x', 'x', 
            'M', 'M', 'F', 'x',
            'M', 'M', 'M', 'x',
            'C', 'M', 'M', 'x',
            'I', 'f', 'M', 'x',
            'x', 'x', 'x', 'x'
        ];
    }

    placeTile(tile, index) {
        console.log('Mountain.placeTile', tile, index);
        // TODO: implement logic to avoid illegal moves
        this.cells[index] = tile.name;
    }
}
