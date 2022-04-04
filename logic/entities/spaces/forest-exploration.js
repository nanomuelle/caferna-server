const { StockableGood } = require('../stockable-good.js');
const { FixedGood } = require('../fixed-good.js');
const { GOODS } = require('../../constants.js');
const { Space } = require('./space.js');
const { GoodsAction } = require('../../actions/goods-action.js');

exports.ForestExploration = class extends Space {
    constructor() {
        super('forest-exploration', 'Forest exploration');

        const action1 = new GoodsAction();
        action1.goods.push(new StockableGood(GOODS.WOOD, 2, 1));
        action1.goods.push(new FixedGood(GOODS.FOOD, 2));

        this.actions.push(action1);
    }


    /**
     * Use Forest exploration space
     *
     * @param {*} dwarf             // dwarf used to execute de space actions
     * @param {*} spaceParams    // not used
     *
     */
     use(dwarf, spaceParams) {
        super.use(dwarf, { params: [ { index: 0 } ]} );
   }
}
