store/index.ts
import { createStore } from 'vuex'
```
const store = createStore({
  modules: {
	user
  },
  strict
})

export default store
```

user.ts
import { GetterTree, MutationTree, ActionTree, ActionContext } from 'vuex'
```
class State {
  user: User | null = null
}

type Context = ActionContext<State, null>

const actions = <ActionTree<State, any>>{
  getCurrentUser (context: Context) {
  }
}

const getters = <GetterTree<State, any>>{
  user: (state: State): User | null => state.user
}

const mutations = <MutationTree<State>>{
  user (state: State, user: User) {
  }
}

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state: new State()
}
```

##use getters

```
  computed: {
    ...mapGetters('user', [
      'user'
    ])
```
```
const currentUser = computed<string>(() => store.getters['user/user'])
```
