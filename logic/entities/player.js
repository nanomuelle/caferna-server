const { GOODS } = require('../constants.js');
const { Dwarf } = require('./dwarf.js');
const { Forest } = require('./Forest.js');
const { Mountain } = require('./Mountain.js');

exports.Player = class {
    constructor(game, id, color, food, isInitial) {
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
            [GOODS.DOG]: 0,
            [GOODS.SHEEP]: 0,
            [GOODS.BOAR]: 0,
            [GOODS.DONKEY]: 0,
            [GOODS.COW]: 0,

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

        this.dwarfs = [
            new Dwarf(this, `${ this.id }1`),
            new Dwarf(this, `${ this.id }2`)
        ];
        this.dwarfs.forEach(dwarf => dwarf.state = Dwarf.STATE.READY);

        this.forest = new Forest(this);
        this.mountain = new Mountain(this);

//        this._isInitialPlayer = isInitial;
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
        this.goods[name] += stock;
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
}
