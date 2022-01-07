export default {
  requests(state, getters, rootState, rootGetters) {
    const playerId = rootGetters.userId;
    return state.requests.filter((req) => req.playerId === playerId);
  },
  hasRequests(state, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};
