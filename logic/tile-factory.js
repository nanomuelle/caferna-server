const { TILE_NAME } = require('./constants');

const { ForestFieldTile } = require('./entities/tiles/forest-field-tile');
const { ForestLargePastureTile } = require('./entities/tiles/forest-large-pasture-tile');
const { ForestLittlePastureTile } = require('./entities/tiles/forest-little-pasture-tile');
const { ForestMeadowTile } = require('./entities/tiles/forest-meadow-tile');
const { ForestOuterTile } = require('./entities/tiles/forest-outer-tile');
const { ForestTile } = require('./entities/tiles/forest-tile');
const { MountainCavernTile } = require('./entities/tiles/mountain-cavern-tile');
const { MountainDeepTunnelTile } = require('./entities/tiles/mountain-deep-tunnel-tile');
const { FurnishInitialDwellingTile } = require('./entities/tiles/furnish-initial-dwelling-tile');
const { MountainOreMineTile } = require('./entities/tiles/mountain-ore-mine-tile');
const { MountainOuterTile } = require('./entities/tiles/mountain-outer-tile');
const { MountainRubyMineTile } = require('./entities/tiles/mountain-ruby-mine-tile');
const { MountainTile } = require('./entities/tiles/mountain-tile');
const { MountainTunnelTile } = require('./entities/tiles/mountain-tunnel-tile');
const { FurnishDwellingTile } = require('./entities/tiles/furnish-dwelling-tile');
const { FurnishSimpleDwelling01Tile } = require('./entities/tiles/furnish-simple-dwelling-01-tile');
const { FurnishSimpleDwelling02Tile } = require('./entities/tiles/furnish-simple-dwelling-02-tile');
const { FurnishMixedDwellingTile } = require('./entities/tiles/furnish-mixed-dwelling-tile');
const { FurnishCoupleDwellingTile } = require('./entities/tiles/furnish-couple-dwelling-tile');
const { FurnishAdditionalDwellingTile } = require('./entities/tiles/furnish-additional-dwelling-tile');

const TILE_CONSTRUCTORS = {
    [TILE_NAME.x]: ForestOuterTile,
    [TILE_NAME.F]: ForestTile,
    [TILE_NAME.m]: ForestMeadowTile,
    [TILE_NAME.f]: ForestFieldTile,
    [TILE_NAME.p]: ForestLittlePastureTile,
    [TILE_NAME.P]: ForestLargePastureTile,

    [TILE_NAME.X]: MountainOuterTile,
    [TILE_NAME.M]: MountainTile,
    [TILE_NAME.C]: MountainCavernTile,
    [TILE_NAME.T]: MountainTunnelTile,
    [TILE_NAME.D]: MountainDeepTunnelTile,
    [TILE_NAME.O]: MountainOreMineTile,
    [TILE_NAME.R]: MountainRubyMineTile,
    [TILE_NAME.I]: FurnishInitialDwellingTile,

    [TILE_NAME.DWELLING]: FurnishDwellingTile,
    [TILE_NAME.SIMPLE_DWELLING_01]: FurnishSimpleDwelling01Tile,
    [TILE_NAME.SIMPLE_DWELLING_02]: FurnishSimpleDwelling02Tile,
    [TILE_NAME.MIXED_DWELLING]: FurnishMixedDwellingTile,
    [TILE_NAME.COUPLE_DWELLING]: FurnishCoupleDwellingTile,
    [TILE_NAME.ADDITIONAL_DWELLING]: FurnishAdditionalDwellingTile
};

exports.TileFactory = {
    create(player, tileName) {
        console.log('TileFactory.create', player.id, tileName);
        const tileConstructor = TILE_CONSTRUCTORS[tileName];
        if (!tileConstructor) {
            const msg = `TileFactory: unknown tileName '${ tileName }'`;
            console.error(msg);
            throw new Error(msg);
        }
        return new tileConstructor(player);
    }
};