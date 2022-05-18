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
    tags: {}
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
    * @param {Tag} state
    */
    SET_TAGS(state, tag: Tag) {
      state.tags = {
        ...state.tags,
        ...tag
      }
      console.log(state.tags, '!')
    },
  },
  actions: {
    /**
    * load videos and tags from mirage
    */
    async loadVideos({ commit }) {
      const result: {
        //todo move types to file todo refactor API types
        data: { type: string, id: string, attributes: Videos, relationships: { tags: { data: { type: string, id: string }[] } } }[],
        included: { type: string, id: string, attributes: Tag, relationships: Record<string, unknown> }[]
      }
        = await (await Api().get('/videos')).data

      result.data.forEach((item) => {
        const { id, attributes, relationships } = item
        const tagsId = relationships.tags.data.filter(i => i.type === 'tags')
        commit('SET_VIDEOS', new Video(attributes, id, tagsId))
      })

      result.included.filter(i => i.type === 'tags')
        .map((t) => {
          commit('SET_TAGS', { [t.id]: Object.values(t.attributes).join('') })
        })

    },
    clearVideos({ commit }) {
      commit('CLEAR_VIDEOS')
    }
  },
  modules: {},
});
