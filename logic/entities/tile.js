const { GOODS, TILE_NAME } = require('../constants');

// const FURNISH_TILES = [
//     // TODO ...
//     TILE_NAME.DWELLING,
//     TILE_NAME.SIMPLE_DWELLING_01,
//     TILE_NAME.SIMPLE_DWELLING_02,
//     TILE_NAME.MIXED_DWELLING,
//     TILE_NAME.COUPLE_DWELLING,
//     TILE_NAME.ADDITIONAL_DWELLING,
//     TILE_NAME.CUDDLE_ROOM,
//     TILE_NAME.BREAKFAST_ROOM,
//     TILE_NAME.STUBBLE_ROOM,
//     TILE_NAME.WORK_ROOM,
//     TILE_NAME.GUEST_ROOM,
//     TILE_NAME.OFFICE_ROOM,
//     TILE_NAME.CARPENTER,
//     TILE_NAME.STONE_CARVER,
//     TILE_NAME.BLACKSMITH,
//     TILE_NAME.MINER,
//     TILE_NAME.BUILDER,
//     TILE_NAME.TRADER,
//     TILE_NAME.WOOD_SUPPLIER,
//     TILE_NAME.STONE_SUPPLIER,
//     TILE_NAME.RUBY_SUPPLIER,
//     TILE_NAME.DOG_SCHOOL,
//     TILE_NAME.QUARRY,
//     TILE_NAME.SEAM,
//     TILE_NAME.SLAUGHTERING_CAVE,
//     TILE_NAME.COOKING_CAVE,
//     TILE_NAME.WORKING_CAVE,
//     TILE_NAME.MINING_CAVE,
//     TILE_NAME.BREADING_CAVE,
//     TILE_NAME.PEACEFUL_CAVE,
//     TILE_NAME.WEAVING_PARLOR,
//     TILE_NAME.MILKING_PARLOR,
//     TILE_NAME.STATE_PARLOR,
//     TILE_NAME.HUNTING_PARLOR,
//     TILE_NAME.BEER_PARLOR,
//     TILE_NAME.BLACKSMITHING_PARLOR,
//     TILE_NAME.STONE_STORAGE,
//     TILE_NAME.ORE_STORAGE,
//     TILE_NAME.SPARE_PART_STORAGE,
//     TILE_NAME.MAIN_STORAGE,
//     TILE_NAME.WEAPON_STORAGE,
//     TILE_NAME.SUPPLIES_STORAGE,
//     TILE_NAME.BROOM_CHAMBER,
//     TILE_NAME.TREASURE_CHAMBER,
//     TILE_NAME.FOOD_CHAMBER,
//     TILE_NAME.PRAYER_CHAMBER,
//     TILE_NAME.WRITING_CHAMBER,
//     TILE_NAME.FODDER_CHAMBER
// ];

const FOREST_TILE_NAMES = [
    TILE_NAME.x,
    TILE_NAME.F,
    TILE_NAME.E,
    TILE_NAME.m,
    TILE_NAME.f,
    TILE_NAME.b,
    TILE_NAME.r,
    TILE_NAME.p,
    TILE_NAME.P,
];

// const MOUNTAIN_TILE_NAMES = [
//     TILE_NAME.X,
//     TILE_NAME.M,
//     TILE_NAME.C,
//     TILE_NAME.T,
//     TILE_NAME.D,
//     TILE_NAME.O,
//     TILE_NAME.R,
//     TILE_NAME.l,
//     TILE_NAME.L,
//     TILE_NAME.I,
// ];

exports.Tile = class {
    constructor(player, name) {
        this.player = player;
        this.name = name;

        this[GOODS.DOG] = 0;
        this[GOODS.SHEEP] = 0;
        this[GOODS.BOAR] = 0;
        this[GOODS.DONKEY] = 0;
        this[GOODS.COW] = 0;

        this[GOODS.GRAIN] = 0;
        this[GOODS.VEGGY] = 0;

        this._hasStable = false;
        // this.cell = -1;
        // this.tweenCell = -1; // Only for Big Pastures
    }

    get dwarfCapacity() {
        return 0;
    }

    get points() {
        return 0;
    }

    get hasStable() {
        return this._hasStable;
    }

    placeAnimal(animalId) {
        this[animalId] += 1;
    }

    placeStable() {
        this._hasStable = true;
    }

    sow(crop) {
        console.log('Tile.sow', crop);
        this.player.addGood({ name: crop, stock: -1});
        // TODO validation logic
        if (crop === GOODS.GRAIN) {
            this[crop] += 3;
        } else {
            this[crop] += 2;
        }
    }

    get isForest() {
        return FOREST_TILE_NAMES.includes(this.name);
    }

    get isMountain() {
        return !this.isForest; // MOUNTAIN_TILE_NAMES.includes(this.name);
    }

    numberOfAnimals(animalId) {
        return this[animalId];
    }

    get animalsToAscii() {
        const dogs = 'd'.repeat(this[GOODS.DOG]);
        const sheep = 's'.repeat(this[GOODS.SHEEP]);
        const boars = 'b'.repeat(this[GOODS.BOAR]);
        const donkeys = 'k'.repeat(this[GOODS.DONKEY]);
        const cows = 'w'.repeat(this[GOODS.COW]);
        return `${ dogs }${ sheep }${ boars }${ donkeys }${ cows }`;
    }

    get stableToAscii() {
        return this.hasStable ? 'H' : '';
    }

    get nameToAscii() {
        if (this[GOODS.GRAIN] > 0) {
            return 'G'.repeat(this[GOODS.GRAIN]);
        }

        if (this[GOODS.VEGGY] > 0) {
            return 'V'.repeat(this[GOODS.VEGGY]);
        }

        return this.name;
    }

    toAscii() {
        return ` ${ this.nameToAscii }${ this.stableToAscii }${ this.animalsToAscii.padEnd(3, ' ') } `;
    }
};
