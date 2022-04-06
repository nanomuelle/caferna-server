const { AbstractAction } = require('./abstract-action.js');
const { GOODS, TILE_NAME } = require('../constants.js');
const { FixedGood } = require('../entities/fixed-good.js');

exports.ExpeditionAction = class extends AbstractAction {
    constructor(numExpeditions) {
        super('expedition-action');
        this.numExpeditions = numExpeditions;
        this._executeReward = this._executeReward.bind(this);
    }

    /**
     * Use Expedition Action
     *
     * Expected spaceParams:
     * ```json
     * {
     *  rewards: [  // array of rewards with its params when needed
     *      { id: "reward-id", params: {} }
     *  ]
     * }
     *  ```
     *   | ID  | DESCRIPTION                     | PARAMS |
     *   |-----|---------------------------------|--------|
     *   |  1+ | +1 to all weapons               |        |
     *   |  1W | 1 wood                          |        |
     *   |  1d | 1 dog                           |        |
     *   |  2g | 1 grain                         |        |
     *   |  2s | 1 sheet                         | { place: Forest/Mountain, cell: <number> } |
     *   |  3S | 1 stone                         |        |
     *   |  3k | 1 donkey                        | { place: Forest/Mountain, cell: <number> } |
     *   |  4v | 1 veggy                         |        |
     *   |  4o | 2 ore                           |        |
     *   |  5b | 1 boar                          | { place: Forest/Mountain, cell: <number> } |
     *   |  6G | 2 gold                          |        |
     *   |  7h | Furnish cavern                  | params: { cell: <number>, furnishId: <string> } |
     *   |  8H | Place Stable                    | { cell: <number> } |
     *   |  9T | Place Tunnel Tile               | { cell: <number> } |
     *   |  9p | Place Little Pasture Tile       | { cell: <number> |
     *   | 10w | cow                             | { place: Forest/Mountain, cell: <number> } |
     *   | 10P | Place Big Pasture Tween Tile    | { cell, direction } |
     *   | 11f | Place Field Tile                | { cell } |
     *   | 11d | Furnish dwelling                | { cell: <number>, furnishId: <string> } |
     *   | 12m | Place Meadow Tile               | { cell } |
     *   | 12S | Sow action (max 2G and 2V)      | { sow: [{ crop: Grain/Veggy, cell }, ...] } |
     *   | 14C | Place Cavern Tile               | { cell } |
     *   | 14B | Breed up (max two animal types) | { animals: [{ animalId, cell }, ...] } |
     *
     * @param { Dwarf } dwarf 
     * @param { Object } actionParams 
     */
    use(dwarf, actionParams = { rewards: [] }) {
        super.use(dwarf);
        const { rewards } = actionParams;
        rewards.forEach(reward => this._executeReward(dwarf, reward));
        dwarf.increaseWeapon();
    }

    _executeReward(dwarf, {id, params}) {
        const player = dwarf.player;
        const rewardExecutors = {
            '1+': () => player.increaseWeapons(),
            '1W': () => player.addGood(new FixedGood(GOODS.WOOD, 1).obtainStock()),
            '1d': () => player.placeAnimal(GOODS.DOG, params.board, params.cell),
            '2g': () => player.addGood(new FixedGood(GOODS.GRAIN, 1).obtainStock()),
            '2s': () => player.placeAnimal(GOODS.SHEEP, params.board, params.cell),
            '3S': () => player.addGood(new FixedGood(GOODS.STONE, 1).obtainStock()),
            '3k': () => player.placeAnimal(GOODS.DONKEY, params.board, params.cell),
            '4v': () => player.addGood(new FixedGood(GOODS.VEGGY, 1).obtainStock()),
            '4o': () => player.addGood(new FixedGood(GOODS.ORE, 2).obtainStock()),
            '5b': () => player.placeAnimal(GOODS.BOAR, params.board, params.cell),
            '6G': () => player.addGood(new FixedGood(GOODS.GOLD, 2).obtainStock()),
            '7h': () => player.placeFurnish(params.furnishId, params.cell),
            '8H': () => player.placeStable(params.cell),
            '9T': () => player.placeTileByName(TILE_NAME.T, params.cell),
            '9p': () => player.placeTileByName(TILE_NAME.p, params.cell),
            '10w': () => player.placeAnimal(GOODS.COW, params.board, params.cell),
            '10P': () => player.placeTileByName(TILE_NAME.P, params.cell),
            '11f': () => player.placeTileByName(TILE_NAME.f, params.cell),
            '11d': () => player.placeDwelling(params.dwellingId, params.cell),
            '12m': () => player.placeTileByName(TILE_NAME.m, params.cell),
            '12s': () => player.sow(params.crops),
            '14c': () => player.placeTileByName(TILE_NAME.C, params.cell),
            '14B': () => player.breedFarmAnimals(params.animals)
        }

        rewardExecutors[id]();
        // console.log("ExpeditionAction._executingReward", id, params);
    }
}
