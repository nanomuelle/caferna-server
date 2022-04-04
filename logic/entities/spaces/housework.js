const { FixedGood } = require('../fixed-good.js');
const { GOODS, NEXUS } = require('../../constants.js');
const { Space } = require('./space.js');
const { GoodsAction } = require('../../actions/goods-action.js');
const { FurnishCavernAction } = require('../../actions/furnish-cavern-action.js');

exports.Housework = class extends Space {
    constructor() {
        super('housework', 'Housework', NEXUS.AND_OR);

        const action1 = new GoodsAction();
        action1.goods.push(new FixedGood(GOODS.DOG, 1));

        const action2 = new FurnishCavernAction();

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
