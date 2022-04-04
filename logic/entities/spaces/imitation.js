const { FixedGood } = require('../fixed-good.js');
const { GOODS } = require('../../constants.js');
const { Space } = require('./space.js');
const { GoodsAction } = require('../../actions/goods-action.js');
const { ImitationAction } = require('../../actions/imitation-action.js');

exports.Imitation = class extends Space {
    constructor() {
        super('imitation', 'Imitation');

        this.costAction = new GoodsAction();
        this.costAction.goods.push(new FixedGood(GOODS.FOOD, -2));
        this.imitationAction = new ImitationAction();
    }

    /**
     * Use imitation space
     *
     * Expected spaceParams:
     * {
     *     spaceId: "",    // imitated space id
     *     params: {}      // imitated spaceParams
     * }
     *
     * Example: imitate drift mining
     * {
     *     spaceId: "drift-mining" // id of drift mining space
     *     params: [               // spaceParams of drift mining space
     *         { index: 0 },
     *         {
     *             index: 1,
     *             params: {
     *                 name: "CT",
     *                 cell: 17,
     *                 direction: "t"
     *             }
     *         }
     *     ]
     * }
     *
     * @param {*} dwarf             // dwarf used to execute de space actions
     * @param {*} spaceParams    // params of the imitated space
     *
     */
    use(dwarf, spaceParams) {
        this.dwarf = dwarf;
        this.costAction.use(dwarf);
        this.imitationAction.use(dwarf, spaceParams[0]);
    }
}
