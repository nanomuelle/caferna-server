const { FixedGood } = require('../fixed-good.js');
const { NEXUS, GOODS } = require('../../constants.js');
const { Space } = require('./space.js');
const { GoodsAction } = require('../../actions/goods-action.js');
const { HaveABabyAction } = require('../../actions/have-a-baby-action.js');

exports.Growth = class extends Space {
    constructor() {
        super('growth', 'Growth', NEXUS.OR);

        const action1 = new GoodsAction();
        action1.goods.push(new FixedGood(GOODS.WOOD, 1));
        action1.goods.push(new FixedGood(GOODS.STONE, 1));
        action1.goods.push(new FixedGood(GOODS.ORE, 1));
        action1.goods.push(new FixedGood(GOODS.FOOD, 1));
        action1.goods.push(new FixedGood(GOODS.GOLD, 2));

        const action2 = new HaveABabyAction();

        this.actions.push(action1);
        this.actions.push(action2);
    }

    /**
     * Use growth space
     *
     * Expected spaceParams:
     * ```json
     * {
     *     actionParams: [   // spaceParams
     *         { index: 0 }, // index of action to execute first
     *         { index: 1 }  // index of action to execute second when applicable (having guest-room)
     *     ]
     * }
     * ```
     * @param {*} dwarf       dwarf to be used
     * @param {*} spaceParams params of the drift-mining space
     *
     */
     use(dwarf, spaceParams) {
        console.log('Growth.use', dwarf.id, spaceParams);
        super.use(dwarf, spaceParams);
    }
}
