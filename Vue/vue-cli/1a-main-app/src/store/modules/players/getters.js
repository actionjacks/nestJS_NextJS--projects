export default {
  players(state) {
    return state.players;
  },
  hasPlayers(state) {
    //return false if no players in state
    return state.players && state.players.length > 0;
  },
};
