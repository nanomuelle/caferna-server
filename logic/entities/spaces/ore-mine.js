const { StockableGood } = require('../stockable-good.js');
const { NEXUS, GOODS } = require('../../constants.js');
const { Space } = require('./space.js');
const { GoodsAction } = require('../../actions/goods-action.js');
const { MineralMineAction } = require('../../actions/mineral-mine-action.js');

exports.OreMine = class extends Space {
    constructor() {
        super('ore-mine', 'OreMine', NEXUS.AND_OR);

        const action1 = new GoodsAction();
        action1.goods.push(new StockableGood(GOODS.ORE, 3, 2));
        action1.forEachMineralMine = 2;

        const action2 = new MineralMineAction();

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
