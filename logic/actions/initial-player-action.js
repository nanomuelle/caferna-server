const { AbstractAction } = require('./abstract-action.js');

exports.InitialPlayerAction = class extends AbstractAction {
    use(dwarf) {
        super.use(dwarf);

        const { player } = dwarf;
        player.game.setInitialPlayer(player);
    }
}
