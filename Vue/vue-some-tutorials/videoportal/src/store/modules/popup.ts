import { ShowPopup } from "../stateTypes"

export default {
  namespaced: true,
  state: {
    showPopup: [] as ShowPopup[]
  },
  getters: {
    getPopup(state: any) {
      return state.showPopup
    }
  },
  mutations: {
    SET_POPUP(state: { showPopup: ShowPopup[] }, payload: any) {
      state.showPopup.push(payload)
    }
  },
  actions: {
    startPopup({ commit }: any, payload: any) {
      commit('SET_POPUP', payload)
    },
  }
}