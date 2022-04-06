const { AbstractAction } = require('./abstract-action.js');

exports.HaveABabyAction = class extends AbstractAction {
    use(dwarf) {
        super.use(dwarf);

        const { player } = dwarf;
        player.haveABaby();
    }
}
