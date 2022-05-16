import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { State } from './stateTypes';
import Api from '@/service/videosFromMirage'
import { Video, Videos } from '@/Classes/Videos'

export type Tags = 'firstTag' | 'secondTag' | 'thirdTag'
export type Tag = Record<number, Tags>

export const key: InjectionKey<Store<State>> = Symbol()
export const store = createStore<State>({
  state: {
    videos: [],
    tags: []
  },
  getters: {
    videos(state) {
      return state.videos
    },
    tags(state) {
      return state.tags
    }
  },
  mutations: {
    /**
    * @param {Videos[]} state
    */
    SET_VIDEOS(state, videos) {
      state.videos.push(videos)
    },
    CLEAR_VIDEOS(state, _) {
      state.videos = []
    },
    /**
    * @param {Tag[]} state
    */
    SET_TAGS(state, tags) {
      state.tags.push(tags)
    },
  },
  actions: {
    async loadVideos({ commit }) {
      const result: {
        //todo move types to file
        data: { type: string, id: string, attributes: Videos }[],
        included: { type: string, id: string, attributes: Tag, relationships: Record<string, unknown> }[]
      }
        = await (await Api().get('/videos')).data

      result.data.forEach((item) => {
        const { id, attributes } = item
        commit('SET_VIDEOS', new Video(attributes, id))
      })

      const tags = result.included.filter(i => i.type === 'tags')
        .map((t) => {
          return Object.assign({ [t.id]: Object.values(t.attributes).join('') })
        })
      commit('SET_TAGS', tags)

      console.log(result)
      console.log(tags)
    },
    clearVideos({ commit }) {
      commit('CLEAR_VIDEOS')
    }
  },
  modules: {},
});
