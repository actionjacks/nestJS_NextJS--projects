export default {
  //first data need be changed by actions
  addPlayer(state, payload) {
    state.players.push(payload);
  },
  setPlayers(state, payload) {
    state.players = payload;
  },
};
