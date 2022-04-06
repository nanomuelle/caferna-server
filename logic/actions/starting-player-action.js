const { AbstractAction } = require('./abstract-action.js');

exports.StartingPlayerAction = class extends AbstractAction {
    use(dwarf) {
        super.use(dwarf);

        const { player } = dwarf;
        player.game.setStartingPlayer(player.id);
    }
}
