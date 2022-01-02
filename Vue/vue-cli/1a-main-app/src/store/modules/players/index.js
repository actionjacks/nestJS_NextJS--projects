import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      players: [
        {
          id: 'c1',
          firstName: 'jacek',
          lastName: 'zablocki',
          areas: ['dota', 'lol', 'SC2'],
          description: 'jack is nice guy',
          rate: 30,
        },
        {
          id: 'c2',
          firstName: 'jacek2',
          lastName: 'zablocki2',
          areas: ['dota', 'lol'],
          description: 'jack is nice guy2',
          rate: 302,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
