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
            new Player(this, 'A', '#ff4000', 1, true),
            new Player(this, 'B', '#0040ff', 1, false),
            new Player(this, 'C', '#ffff00', 2, false),
            new Player(this, 'D', '#00ff00', 3, false),
        ];

        this.spaceManager.init();

        this.phases = ['discover', 'replenish', 'workday', 'home', 'harvest'];
        this.phaseIndex = 0;

        this.roundNumber = 0;
        this.turnPlayerIndex = 0;
        this.initialPlayerIndex = 0;
        // this.selectedPlayerIndex = 0;
        this.ready = true;
    }

    get turnPlayerId() {
        return this.players[this.turnPlayerIndex].id;
    }

    get initialPlayerId() {
        return this.players[this.initialPlayerIndex].id;
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

    setInitialPlayer(playerId) {
        this.players.forEach(player => {
            if (player.id === playerId) {
                player.setInitialPlayer();
            } else {
                player.removeInitialPlayer();
            }
        });
    }

    discoverPhase() {
        this.spaceManager.addNext();
        this.phaseIndex += 1;
    }

    replenishPhase() {
        this.spaceManager.spaces.forEach(space => space.replenish());
    }

    workdayPhase() {
        // this.selectedPlayerIndex = this.initialPlayerIndex;
        this.turnPlayerIndex = this.initialPlayerIndex;
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
