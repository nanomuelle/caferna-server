const { StockableGood } = require('../stockable-good.js');
const { FixedGood } = require('../fixed-good.js');
const { NEXUS, GOODS } = require('../../constants.js');
const { Space } = require('./space.js');
const { GoodsAction } = require('../../actions/goods-action.js');

exports.Clearing = class extends Space {
    constructor() {
        super('clearing', 'Clearing', NEXUS.AND_OR);

        const action1 = new GoodsAction();
        action1.goods.push(new StockableGood(GOODS.WOOD, 2, 2));

        const action2 = new GoodsAction();
        action2.goods.push(new FixedGood(GOODS.MEADOW_FIELD, 1));

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
