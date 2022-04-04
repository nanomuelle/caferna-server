const { NEXUS, GOODS } = require('../../constants.js');
const { Space } = require('./space.js');
const { GoodsAction } = require('../../actions/goods-action.js');
const { FixedGood } = require('../fixed-good.js');
const { ExpeditionAction } = require('../../actions/expedition-action.js');

// export const oreMineConstruction = {
//     id: 'ore-mine-construction',
//     name: 'Ore mine construction',
//     nexus: 'and then / or',
//     actions: [
//         {
//             tiles: ['DO'],
//             always: { ore: 3 },
//         },
//         {
//             expedition: 2,
//         },
//     ],
// };
exports.OreMineConstruction = class extends Space {
    constructor() {
        super('ore-mine-construction', 'Ore Mine Construction', NEXUS.AND_OR);

        const action1 = new GoodsAction();
        action1.goods.push(new FixedGood(GOODS.DEEP_TUNNEL_ORE_MINE, 1));
        action1.goods.push(new FixedGood(GOODS.ORE, 3));

        const action2 = new ExpeditionAction(2);

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
