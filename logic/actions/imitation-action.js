const { AbstractAction } = require('./abstract-action.js');

exports.ImitationAction = class extends AbstractAction {
    use(dwarf, actionParams) {
        console.log('ImitationAction', dwarf.id, actionParams);
        // TODO: validate if it is a correct move
        const { player } = dwarf;
        const { spaceId, spaceParams } = actionParams;
        const imitatedSpace = player.game.getSpaceById(spaceId);
        imitatedSpace.executeActions(dwarf, spaceParams)
    }
}