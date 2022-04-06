const { GOODS } = require('../constants.js');
const { FixedGood } = require('../entities/fixed-good.js');
const { AbstractAction } = require('./abstract-action.js');

const ORE_PER_MINE = 2;
exports.MineralMineAction = class extends AbstractAction {
    use(dwarf) {
        super.use(dwarf);

        const { player } = dwarf;

        player.addGood(
            new FixedGood(GOODS.ORE, ORE_PER_MINE * player.numberOfMineralMines())
        );
    }
}
