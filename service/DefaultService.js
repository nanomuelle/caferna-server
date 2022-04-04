"use strict";

const { GameManager } = require("../logic/game-manager");

const games = [];

const getGameById = gameId => games.find(gm => gm.id === gameId);

const createGameResponse = gm => ({
    created: gm.created,
    ready: gm.ready,
    id: gm.id,
    numPlayers: gm.numPlayers,
    roundNumber: gm.roundNumber,
    turnPlayerId: gm.turnPlayerId,
    initialPlayerId: gm.initialPlayerId
});

const createSpaceResponse = space => ({
    id: space.id,
    name: space.name,
    nexus: space.nexus,
    dwarf: space.dwarf ? createDwarfResponse(space.dwarf) : null
});

const createPlayerResponse = player => ({
    id: player.id,
    color: player.name,
    isInitialPlayer: player.nexus,
    dwarfs: player.dwarfs.map(createDwarfResponse)
});

const createGoodsResponse = goods => ({
    goods
});

const createForestResponse = forest => ({
    forest: forest.serialize()
});

const createMountainResponse = mountain => ({
    mountain: mountain.serialize()
});

const createPlayerDetailResponse = player => ({
    ...createPlayerResponse(player),
    ...createGoodsResponse(player.goods),
    ...createForestResponse(player.forest),
    ...createMountainResponse(player.mountain)
    }
);

const createDwarfResponse = dwarf => ({
    id: dwarf.id,
    weapon: dwarf.weapon,
    isNewBorn: dwarf.isNewBorn
});

/**
 * create a new game
 *
 * body Game Game object that needs to be created
 * no response value expected for this operation
 **/
exports.createGame = function () {
  return new Promise(function (resolve, reject) {
    const gm = new GameManager();
    games.push(gm);
    gm.init(games.length, 4);

    resolve(createGameResponse(gm));
  });
};

/**
 * List Games
 *
 * returns List
 **/
exports.listGames = function () {
  console.log("service listGames");
  return new Promise(function (resolve, reject) {
    if (games.length > 0) {
      resolve(games.map(createGameResponse));
    } else {
      resolve();
    }
  });
};

/**
 * List Game Spaces
 *
 * returns List
 **/
 exports.listGameSpaces = function (gameId) {
    console.log("service listGameSpaces", gameId);
    return new Promise(function (resolve, reject) {
      const gm = getGameById(gameId);
      if (!gm) {
          reject();
      }
      resolve(gm.spaces.map(createSpaceResponse));
    });
  };

/**
 * List Game Players
 *
 * returns List
 **/
 exports.listGamePlayers = function (gameId) {
    console.log("service listGamePlayers", gameId);
    return new Promise(function (resolve, reject) {
      const gm = getGameById(gameId);
      if (!gm) {
          reject();
          return;
      }
      resolve(gm.players.map(createPlayerResponse));
    });
};

/**
 * Use space
 */
exports.useSpace = function (gameId, body) {
    console.log('DefaultService.useSpace');
    const { spaceId, playerId, dwarfId, spaceParams } = body;
    return new Promise(function (resolve, reject) {
        const gm = getGameById(gameId);
        if (!gm) {
            reject(`Game #${ gameId } not found`);
            return;
        }
        console.log('  gameId ok', gameId);

        const space = gm.getSpaceById(spaceId);
        if (!space) {
            reject(`Space #${ spaceId } not found in game #${ gameId }`);
            return;
        }
        console.log('  space ok', spaceId);

        const player = gm.getPlayerById(playerId);
        if (!player) {
            reject(`Player #${ playerId } not found in game #${ gameId }`);
            return;
        }
        console.log('  player ok', playerId);

        const dwarf = player.getDwarfById(dwarfId);
        if (!dwarf) {
            reject(`Dwarf #${ dwarfId } not found in player #${ playerId} in game #${ gameId }`);
        }
        console.log('  dwarf ok', dwarfId);

        // TODO: create logic to assert that the movement is valid
        space.use(dwarf, spaceParams);

        // response
        resolve(createPlayerDetailResponse(player));

        console.log(player.toAscii());
    });
}

function createMockInitialData() {
    // Create and init a new game
    const gm = new GameManager();
    games.push(gm);
    gm.init(games.length, 4);
    gm.replenishPhase();

    // arm a dwarf for test purposes
    gm.players[0].dwarfs[0].weapon = 1;
}

createMockInitialData();