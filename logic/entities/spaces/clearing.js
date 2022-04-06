const { StockableGood } = require('../stockable-good.js');
const { FixedGood } = require('../fixed-good.js');
const { NEXUS, GOODS } = require('../../constants.js');
const { Space } = require('./space.js');
const { GoodsAction } = require('../../actions/goods-action.js');
const { TweenTileAction } = require('../../actions/tween-tile-action.js');

exports.Clearing = class extends Space {
    constructor() {
        super('clearing', 'Clearing', NEXUS.AND_OR);

        const action1 = new GoodsAction();
        action1.goods.push(new StockableGood(GOODS.WOOD, 2, 2));

        const action2 = new TweenTileAction('mf');

        this.actions.push(action1);
        this.actions.push(action2);
    }

    /**
     * Use Clearing space
     *
     * Expected spaceParams:
     * ```json
     * {
     *     actionParams: [   // spaceParams
     *         { index: 0 }, // index of action to execute first
     *         {
     *             index: 1, // index of action to execute second
     *             actionParams: {
     *                 cell: 17,        // cell index
     *                 direction: "t"   // direction of tween tile
     *             }
     *         }
     *     ]
     * }
     * ```
     * @param {*} dwarf       dwarf to be used
     * @param {*} spaceParams params of the drift-mining space
     *
     */
    use(dwarf, spaceParams) {
        console.log('Clearing.use', dwarf.id, spaceParams);
        super.use(dwarf, spaceParams);
    }
}
