export default {
  async constactPlayer(context, payload) {
    const newRequest = {
      // id: new Date().toISOString(),
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://jackmessenger-e9aff.firebaseio.com/requests/${payload.playerId}.json`,
      { method: 'POST', body: JSON.stringify(newRequest) }
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'faild to send');
      throw error;
    }
    newRequest.id = responseData.name;
    newRequest.playerId = payload.playerId;

    //push payload as newRequest to mutation
    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const playerId = context.rootGetters.userId;
    const token = context.rootGetters.token;

    const response = await fetch(
      `https://jackmessenger-e9aff.firebaseio.com/requests/${playerId}.json?auth=${token}`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'faild to fetch');
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        playerId: playerId,
        userEmail: response[key].userEmail,
        message: response[key].message,
      };
      requests.push(request);
    }
    context.commit('setRequests', requests);
  },
};
