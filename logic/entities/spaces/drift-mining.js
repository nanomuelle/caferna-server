const { StockableGood } = require('../stockable-good.js');
const { NEXUS, GOODS } = require('../../constants.js');
const { Space } = require('./space.js');
const { GoodsAction } = require('../../actions/goods-action.js');
const { TweenTileAction } = require('../../actions/tween-tile-action.js');

class DriftMining extends Space {
    constructor() {
        super('drift-mining', 'Drift mining', NEXUS.AND_OR);

        const action1 = new GoodsAction();
        action1.goods.push(new StockableGood(GOODS.STONE, 2, 2));

        const action2 = new TweenTileAction('CT');

        this.actions.push(action1);
        this.actions.push(action2);
    }

    /**
     * Use imitation space
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
        console.log('DriftMining.use', dwarf.id, spaceParams);
        super.use(dwarf, spaceParams);
    }
}

exports.DriftMining = DriftMining;