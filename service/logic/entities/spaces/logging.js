const { StockableGood } = require('../stockable-good.js');
const { NEXUS, GOODS } = require('../../constants.js');
const { Space } = require('./abstract-space.js');
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
}
