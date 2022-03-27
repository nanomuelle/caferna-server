const { StockableGood } = require('../stockable-good.js');
const { NEXUS, GOODS } = require('../../constants.js');
const { Space } = require('./abstract-space.js');
const { GoodsAction } = require('../../actions/goods-action.js');
const { MountainTweenTileAction } = require('../../actions/mountain-tween-tile-action.js');

exports.Excavation = class extends Space {
    constructor() {
        super('excavation', 'Excavation', NEXUS.AND_OR);

        const action1 = new GoodsAction();
        action1.goods.push(new StockableGood(GOODS.STONE, 2, 1));

        const action2 = new MountainTweenTileAction('CC/CT');

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
