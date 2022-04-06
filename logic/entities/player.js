const { GOODS, TILE_NAME } = require('../constants.js');
const { TileFactory } = require('../tile-factory.js');
const { Dwarf } = require('./dwarf.js');
const { Forest } = require('./forest.js');
const { Mountain } = require('./mountain.js');
const { Tile } = require('./tile.js');

const DIRECTION = {
    LEFT: 'l',
    RIGHT: 'r',
    TOP: 't',
    BOTTOM: 'b'
};

const calculateNeighborCell = (cell, direction) => {
    const calculate = {
        [DIRECTION.LEFT]: cell => cell - 1,
        [DIRECTION.RIGHT]: cell => cell + 1,
        [DIRECTION.TOP]: cell => cell - 4,
        [DIRECTION.BOTTOM]: cell => cell + 4,
    }
    return calculate[direction](cell);
};

exports.Player = class {
    constructor(game, id, color, food) {
        this.game = game;

        this.id = id;
        this.color = color;

        this.goods = {
            [GOODS.WOOD]: 0,
            [GOODS.STONE]: 0,
            [GOODS.ORE]: 0,
            [GOODS.RUBY]: 0,

            [GOODS.GRAIN]: 0,
            [GOODS.VEGGY]: 0,

            [GOODS.FOOD]: food,
            [GOODS.GOLD]: 0,

            /* UNPLACED ANIMALS */
            // [GOODS.DOG]: 0,
            // [GOODS.SHEEP]: 0,
            // [GOODS.BOAR]: 0,
            // [GOODS.DONKEY]: 0,
            // [GOODS.COW]: 0,

            /* UNPLACED TILES */
            // [GOODS.CAVERN_CAVERN]: 0,
            // [GOODS.CAVERN_TUNNEL]: 0,
            // [GOODS.MEADOW_FIELD]: 0,
            // [GOODS.DEEP_TUNNEL_ORE_MINE]: 0,
            // [GOODS.RUBY_MINE]: 0,
            // [GOODS.CAVERN]: 0,
            // [GOODS.TUNNEL]: 0,
            // [GOODS.MEADOW]: 0,
            // [GOODS.FIELD]: 0,

            // [GOODS.NEW_BORN]: 0,
        };

        this.dwarfs = [];
        this.haveABaby();
        this.haveABaby();
        // this.dwarfs.forEach(dwarf => dwarf.state = Dwarf.STATE.READY);

        this.forest = new Forest(this);
        this.mountain = new Mountain(this);

//        this._isInitialPlayer = isInitial;
    }

    get isStartingPlayer() {
        return this.game.startingPlayerId === this.id;
    }

    numberOfMineralMines() {
        return this.mountain.tiles.reduce(
            (acc, { name }) => name === TILE_NAME.O ? acc + 1 : acc,
            0
        );
    }

    numberOfAnimals(animalId) {
        return this.forest.numberOfAnimals(animalId) 
            + this.mountain.numberOfAnimals(animalId);
    }

    isInitial() {
        return this.game.initialPlayerId === this.id;
    }

    hasTurn() {
        return this.game.turnPlayerId === this.id;
    }

    getDwarfById(dwarfId) {
        return this.dwarfs.find(dwarf => dwarf.id === dwarfId);
    }

    addGood({ name, stock }) {
        console.log('Player.addGood', {name, stock});
        this.goods[name] += stock;
    }

    _placeTile(tile, cellIndex) {
        // console.log('Player._placeTile', tile.name, cellIndex);
        const board = tile.isForest ? this.forest : this.mountain;
        board.placeTile(tile, cellIndex);
    }

    placeTileByName(tileName, cellIndex) {
        this._placeTile(
            TileFactory.create(this, tileName), 
            cellIndex
        );
    }

    placeTweenTileByName(name, cell, direction) {
        console.log('Player.placeTweenTileByName', name, cell, direction);
        const tiles = name.split('').map(tileName => TileFactory.create(this, tileName));
        this._placeTile(tiles[0], cell)
        this._placeTile(tiles[1], calculateNeighborCell(cell, direction));
    }

    increaseWeapons() {
        this.dwarfs.forEach(
            dwarf => {
                if (dwarf.weapon > 0) {
                    dwarf.increaseWeapon();
                }
            }
        )
    }

    placeAnimal(id, boardName, cellIndex) {
        const board = this[boardName];
        board.placeAnimal(id, cellIndex);
        // const cell = this[board].cells[cellIndex];
        // cell[id] = cell[id] ? cell[id] + 1 : 1;
    }

    placeFurnish(id, cellIndex) {
        this.placeTileByName(id, cellIndex);
    }

    placeDwelling(id, cellIndex) {
        this.placeTileByName(id, cellIndex);
    }

    placeStable(cellIndex) {
        this.forest.placeStable(cellIndex);
    }

    sow(crops) {
        // console.log('Player.sow TODO: STILL NOT IMPLEMENTED!!!!!!');
        crops.forEach(crop => this.forest.sow(crop));
    }

    breedFarmAnimals(animals) {
        console.log('Player.breedFarmAnimals TODO: STILL NOT IMPLEMENTED!!!!!');
        animals.forEach(
            ({id, board, cell}) => { this.placeAnimal(id, board, cell); }
        );
    }

    haveABaby() {
        const baby = new Dwarf(this, `${ this.id }${ this.dwarfs.length + 1}`);
        this.dwarfs.push(baby);
    }

    // get isInitialPlayer() {
    //     return this._isInitialPlayer;
    // }

    // setInitialPlayer() {
    //     this._isInitialPlayer = true;
    // }

    // removeInitialPlayer() {
    //     this._isInitialPlayer = false;
    // }

    // numOfMineralMines() {
    //     // TODO
    //     return 0;
    // }

    // numOfRubyMines() {
    //     // TODOs
    //     return false;
    // }

    _animalSummaryTemplate() {
        const animals = [
            [GOODS.DOG, 'dog' ],
            [GOODS.SHEEP, 'sheep' ],
            [GOODS.BOAR, 'boar' ],
            [GOODS.DONKEY, 'donkey' ],
            [GOODS.COW, 'cow'],
        ];
        return animals.reduce( 
            (acc, [key, label]) => `${ acc }${ label }: ${ this.numberOfAnimals(key) }  `, 
            ''
        );
    }

    _dwarfsSummaryTemplate() {
        // const dwarfSpace = dwarfId => {
        //     const space = this.game.spaceManager.getSpaceByDwarfId(dwarfId);
        //     return space ? `: ${ space.name }` : ': ';
        // };

        // return `dwarfs: ${ this.dwarfs.map(
        //     dwarf => `${ dwarf.id }[${ dwarf.weapon }]${ dwarfSpace(dwarf.id) }`
        // ).join('  ') }`;

        return `${ this.dwarfs.map( dwarf => dwarf.toAscii() ).join('  ') }`;
    }

    toAscii() {
        const forestRows = this.forest.toAscii().split('\n');
        const mountainRows = this.mountain.toAscii().split('\n');
        return `
------------------------------------------------------------------------------------------
Player ${ this.id } ${ this.isStartingPlayer ? 'Starting Player' : '' }
  ${ this._dwarfsSummaryTemplate() }
  ${ Object.keys(this.goods).map(key => `${ key }: ${ this.goods[key] }`).join('  ') }
  ${ this._animalSummaryTemplate() }
${ forestRows.map( (forestRow, index) => `${ forestRow } ${ mountainRows[index]}`).join('\n') }
------------------------------------------------------------------------------------------
`;
    }
}
