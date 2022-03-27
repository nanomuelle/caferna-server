const { FixedGood } = require('../fixed-good.js');
const { NEXUS, GOODS } = require('../../constants.js');
const { Space } = require('./abstract-space.js');
const { GoodsAction } = require('../../actions/goods-action.js');
const { FurnishDwellingAction } = require('../../actions/furnish-dwelling-action.js');

// export const haveChildren = {
//     id: 'have-children',
//     name: 'Have children',
//     nexus: 'or',
//     actions: [
//         {
//             dwarf: 1,
//         },
//         {
//             furnishDwelling: true,
//         },
//     ],
// };
exports.HaveChildren = class extends Space {
    constructor() {
        super('have-children', 'Have Children', NEXUS.OR);

        const action1 = new GoodsAction();
        action1.goods.push(new FixedGood(GOODS.NEW_BORN, 1));

        const action2 = new FurnishDwellingAction();

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
