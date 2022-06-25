import { GetterTree, MutationTree, ActionTree, ActionContext } from "vuex";

export type ThemeTypes = "white-theme" | "black-theme";
class State {
  theme: ThemeTypes = "white-theme";
}

const getters = <GetterTree<State, string>>{
  getCurrentTheme(state: State) {
    return state.theme;
  },
};

const actions = <ActionTree<State, string>>{
  toggleTheme(context: ActionContext<State, string>) {
    const themeToSwitch =
      context.state.theme === "white-theme" ? "black-theme" : "white-theme";
    context.commit("swithTheme", themeToSwitch);
  },
};

const mutations = <MutationTree<State>>{
  swithTheme(state, payload: ThemeTypes) {
    state.theme = payload;
  },
};

export default {
  namespace: true,
  actions,
  getters,
  mutations,
  state: new State(),
};
