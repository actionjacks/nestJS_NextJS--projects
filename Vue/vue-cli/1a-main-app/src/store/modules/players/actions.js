export default {
  async registerPlayer(context, data) {
    //context is data from index folder store from getter user id
    const userId = context.rootGetters.userId;
    const playerData = {
      firstName: data.firstName,
      lastName: data.lastName,
      description: data.description,
      rate: data.rate,
      areas: data.areas,
    };
    const response = await fetch(
      `https://jackmessenger-e9aff.firebaseio.com/players/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(playerData),
      }
    );
    // const responseDate = await response.json();
    if (!response.ok) {
      //error
    }
    //pass data to mutation
    context.commit('addPlayer', {
      ...playerData,
      id: userId,
    });
  },

  async loadPlayers(context, payload) {
    console.log(payload);

    const response = await fetch(
      `https://jackmessenger-e9aff.firebaseio.com/players.json`
    );
    const responseDate = await response.json();
    if (!response.ok) {
      //error
    }

    const players = [];

    for (const key in responseDate) {
      const player = {
        id: key,
        firstName: responseDate[key].firstName,
        lastName: responseDate[key].lastName,
        description: responseDate[key].description,
        rate: responseDate[key].rate,
        areas: responseDate[key].areas,
      };
      players.push(player);
    }
    context.commit('setPlayers', players);
  },
};
