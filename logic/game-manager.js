const { Dwarf } = require('./entities/dwarf.js');
const { Player } = require('./entities/player.js');
const { SpaceManager } = require('./space-manager.js');

exports.GameManager = class {
    constructor() {
        this.spaceManager = new SpaceManager();
        this.created = Date.now().toString();
        this.ready = false;
    }

    init(id, numPlayers) {
        if (numPlayers !== 4) {
            throw new Error(`Game for ${ numPlayers } still not implemented.`);
        }

        this.id = id;

        this.players = [
            new Player(this, 'A', '#ff4000', 1),
            new Player(this, 'B', '#0040ff', 1),
            new Player(this, 'C', '#ffff00', 2),
            new Player(this, 'D', '#00ff00', 3)
        ];

        this.spaceManager.init();

        this.phases = ['discover', 'replenish', 'workday', 'home', 'harvest'];
        this.phaseIndex = 0;

        this.roundNumber = 0;
        this.turnPlayerIndex = 0;
        this.startingPlayerIndex = 0;
        // this.selectedPlayerIndex = 0;
        this.ready = true;
    }

    get turnPlayerId() {
        return this.players[this.turnPlayerIndex].id;
    }

    get startingPlayerId() {
        return this.players[this.startingPlayerIndex].id;
    }

    // proxy 
    get spaces() {
        return this.spaceManager.spaces;
    }

    getSpaceById(spaceId) {
        return this.spaceManager.getById(spaceId);
    }

    getPlayerById(playerId) {
        return this.players.find(player => player.id === playerId);
    }

    setStartingPlayer(playerId) {
        const player = this.players.find(({id}) => id === playerId);
        this.startingPlayerIndex = this.players.indexOf(player);
    }

    discoverPhase() {
        this.spaceManager.addNext();
        this.phaseIndex += 1;
    }

    replenishPhase() {
        // new born dwarfs => adult
        this.players.forEach(
            player => player.dwarfs.forEach(
                dwarf => dwarf.state = Dwarf.STATE.ADULT
            )
        );

        // replenish spaces
        this.spaceManager.spaces.forEach(space => space.replenish());
    }

    workdayPhase() {
        // this.selectedPlayerIndex = this.startingPlayerIndex;
        this.turnPlayerIndex = this.startingPlayerIndex;
    }

    nextPlayerTurn() {
        this.turnPlayerIndex = (this.turnPlayerIndex + 1) % 4; // num-players: 4
        // this.selectedPlayerIndex = this.turnPlayerIndex;
    }

    // homePhase() {
    //     // TODO: increase weapon of adventurers
    // }

    // harvestPhase() {
    //     // TODO: harvest phase when procedent
    // }
}
