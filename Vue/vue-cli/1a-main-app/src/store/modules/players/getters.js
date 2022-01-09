export default {
  players(state) {
    return state.players;
  },
  hasPlayers(state) {
    //return false if no players in state
    return state.players && state.players.length > 0;
  },
  //return true or false
  isPlayer(state, getters, rootState, rootGetters) {
    const players = getters.players;
    const userId = rootGetters.userId;
    return players.some((player) => player.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },
};
