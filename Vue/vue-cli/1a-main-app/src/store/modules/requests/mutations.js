export default {
  addRequest(state, payload) {
    console.log(payload);
    state.requests.push(payload);
  },
  setRequests(state, payload) {
    state.requests = payload;
  },
};
