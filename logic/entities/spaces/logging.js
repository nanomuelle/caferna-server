const { StockableGood } = require('../stockable-good.js');
const { NEXUS, GOODS } = require('../../constants.js');
const { Space } = require('./space.js');
const { GoodsAction } = require('../../actions/goods-action.js');
const { ExpeditionAction } = require('../../actions/expedition-action.js');

exports.Logging = class extends Space {
    constructor() {
        super('logging', 'Logging', NEXUS.AND_THEN_OR);

        const action1 = new GoodsAction();
        action1.goods.push(new StockableGood(GOODS.WOOD, 3, 3));

        const action2 = new ExpeditionAction(1);

        this.actions.push(action1);
        this.actions.push(action2);
    }

    /**
     * Use Logging space
     *
     * Expected spaceParams:
     * ```json
     * {
     *     spaceId: "",    // imitated space id
     *     params: [       // spaceParams
     *         { index: 0 },            // index of action to execute first
     *         {
     *             index: 1,            // index of action to execute second
     *             params: {            // params of index 1 action (Expedition 3)
     *                 rewards: []      // array of reward (see expedition action)
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
        console.log('Logging.use', dwarf.id, spaceParams);
        super.use(dwarf, spaceParams);
    }
}
