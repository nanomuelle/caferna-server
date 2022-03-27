const { FixedGood } = require('../fixed-good.js');
const { GOODS } = require('../../constants.js');
const { Space } = require('./abstract-space.js');
const { GoodsAction } = require('../../actions/goods-action.js');

exports.Imitation = class extends Space {
    constructor() {
        super('imitation', 'Imitation');

        const action1 = new GoodsAction();
        action1.goods.push(new FixedGood(GOODS.FOOD, -2));
        this.actions.push(action1);

        this.imitateSpace = null;
    }

    use(dwarf, space, params) {
        this.imitateSpace = space;
        this.imitateSpace.use(dwarf, params);
    }
}
