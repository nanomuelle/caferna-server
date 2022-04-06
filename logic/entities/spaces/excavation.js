const { StockableGood } = require('../stockable-good.js');
const { NEXUS, GOODS } = require('../../constants.js');
const { Space } = require('./space.js');
const { GoodsAction } = require('../../actions/goods-action.js');
const { TweenTileAction } = require('../../actions/tween-tile-action.js');

exports.Excavation = class extends Space {
    constructor() {
        super('excavation', 'Excavation', NEXUS.AND_OR);

        const action1 = new GoodsAction();
        action1.goods.push(new StockableGood(GOODS.STONE, 2, 1));

        const action2 = new TweenTileAction(['CC', 'CT']);

        this.actions.push(action1);
        this.actions.push(action2);
    }

    /**
     * Use Logging space
     *
     * Expected spaceParams:
     * ```json
     * {
     *     actionParams: [   // spaceParams
     *         { index: 0 }, // index of action to execute first
     *         {
     *             index: 1, // index of action to execute second
     *             actionParams: {
     *                 alternativeIndex: 0, // 0 => CC, 1 => CT
     *                 cell: 17,            // cell index
     *                 direction: "t"       // direction of tween tile
     *             }
     *         }
     *     ]
     * }
     * ```
     *
     * @param { Dwarf } dwarf           dwarf used to execute de space actions
     * @param { Object } spaceParams spaceParams to use in the imitated space
     *
     */
     use(dwarf, spaceParams) {
        console.log('Excavation.use', dwarf.id, spaceParams);
        super.use(dwarf, spaceParams);
    }
}
