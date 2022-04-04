const { AbstractAction } = require('./abstract-action.js');

exports.TweenTileAction = class extends AbstractAction {
    constructor(tweenTileName) {
        super('tween-tile-action');
        this.tweenTileName = Array.isArray(tweenTileName) ? tweenTileName : [tweenTileName];
    }

    /**
     * Use TweenTileAction
     *
     * expected actionParams:
     * ```js
     * {
     *  cell,            // cell index to place
     *  direction,       // direction of the tween tile (r -> right, b-> bottom, l-> left, t -> top)
     *  alternativeIndex // the index of the tween tile to use when needed
     * }
     * ```
     *
     *  Example without alternativeIndex:
     *  ```
     *  const tweenTile = new TweenTileAction('CT');
     *  tweenTile.use(dwarf, { cell: 4, direction: 'r' });
     *  ```
     *  Example with alternativeIndex:
     *  ```
     *  tweenTile = new TweenTileAction(['CC','CT'])
     *  // use the CT tile
     *  tweenTile.use(dwarf, { dell: 4, direction: 'r', alternativeIndex: 1 });
     *  ```
     * @param {*} dwarf
     * @param {*} actionParams
     */
    use(dwarf, actionParams) {
        console.log('tween-tile-action', dwarf.id, actionParams);
        // TODO: validate if it is a correct move
        const { player } = dwarf;
        const { cell, direction, alternativeIndex = 0 } = actionParams;
        const tweenTileName = this.tweenTileName[alternativeIndex];
        player.placeTweenTileByName(tweenTileName, cell, direction);
    }
}
