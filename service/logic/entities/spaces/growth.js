const { FixedGood } = require('../fixed-good.js');
const { NEXUS, GOODS } = require('../../constants.js');
const { Space } = require('./abstract-space.js');
const { GoodsAction } = require('../../actions/goods-action.js');

exports.Growth = class extends Space {
    constructor() {
        super('growth', 'Growth', NEXUS.OR);

        const action1 = new GoodsAction();
        action1.goods.push(new FixedGood(GOODS.WOOD, 1));
        action1.goods.push(new FixedGood(GOODS.STONE, 1));
        action1.goods.push(new FixedGood(GOODS.ORE, 1));
        action1.goods.push(new FixedGood(GOODS.FOOD, 1));
        action1.goods.push(new FixedGood(GOODS.GOLD, 2));

        const action2 = new GoodsAction();
        action2.goods.push(new FixedGood(GOODS.NEW_BORN, 1));

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
