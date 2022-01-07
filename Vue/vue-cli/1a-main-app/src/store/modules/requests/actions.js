export default {
  constactPlayer(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      playerId: payload.playerId,
      userEmail: payload.email,
      message: payload.message,
    };
    //push payload as newRequest to mutation
    context.commit('addRequest', newRequest);
  },
};
