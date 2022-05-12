import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { State } from './stateTypes';

export const key: InjectionKey<Store<State>> = Symbol()
export const store = createStore<State>({
  state: {
    videos: [
      {
        id: 1,
        name: 'video-1',
        description: `<p>lorem ipsum lorem ipsum lorem ipsum</p>`,
        thumbnail: 'https://i.ytimg.com/vi/zL0kemiI0yc/maxresdefault.jpg'
      },
      {
        id: 2,
        name: 'video-2',
        description: `<p>lorem ipsum lorem ipsum lorem ipsum</p>`,
        thumbnail: 'https://i.ytimg.com/vi/zL0kemiI0yc/maxresdefault.jpg'
      },
      {
        id: 3,
        name: 'video-3',
        description: `<p>lorem ipsum lorem ipsum lorem ipsum</p>`,
        thumbnail: 'https://i.ytimg.com/vi/zL0kemiI0yc/maxresdefault.jpg'
      },
      {
        id: 4,
        name: 'video-4',
        description: `<p>lorem ipsum lorem ipsum lorem ipsum</p>`,
        thumbnail: 'https://i.ytimg.com/vi/zL0kemiI0yc/maxresdefault.jpg'
      },
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
