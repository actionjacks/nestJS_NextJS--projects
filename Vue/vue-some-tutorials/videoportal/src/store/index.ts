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
    tags: {},
    playedVideos: []
  },
  getters: {
    videos(state) {
      return state.videos
    },
    getVideosByTagId: (state) => (id: string) => {
      return state.videos.filter(({ tagids }) => {
        const ids = tagids?.map(({ id }) => id)
        return ids?.includes(id)
      })
    },
    tags(state) {
      return state.tags
    },
    getTagById: (state) => (id: number) => {
      return state.tags[id]
    },
    getPlayedVideos(state) {
      return state.playedVideos
    }
  },
  mutations: {
    /**
    * @param {Videos[]} state
    */
    SET_VIDEOS(state: { videos: Videos[] }, videos) {
      state.videos.push(videos)
    },
    CLEAR_VIDEOS(state: { videos: Videos[] }, _) {
      state.videos = []
    },
    /**
    * @param {Tag} state
    */
    SET_TAGS(state: { tags: Tag }, tag: Tag) {
      state.tags = {
        ...state.tags,
        ...tag
      }
    },
    SET_PLAYED_VIDEOS(state, playedVideos) {
      state.playedVideos = playedVideos
    },
    MARK_VIDEO_PLAYED(state, videoId) {
      // check for duplicates
      if (state.playedVideos.map(id => id === videoId).includes(true)) {
        return
      }
      const playedVideos = state.playedVideos.concat(videoId)
      window.localStorage.playedVideos = JSON.stringify(playedVideos)
      state.playedVideos = playedVideos
    }
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
    async createVideo({ commit }, model) {
      const result = await Api().post('/videos', model)
      return result
    },
    clearVideos({ commit }) {
      commit('CLEAR_VIDEOS')
    },
    getPlayedVideos({ commit }) {
      if (window.localStorage.getItem('playedVideos') === null) {
        return
      }
      const playedVideos = JSON.parse(window.localStorage.playedVideos)
      commit('SET_PLAYED_VIDEOS', playedVideos)
    },
    markPlayed({ commit }, videoId: string) {
      commit('MARK_VIDEO_PLAYED', videoId)
    }
  },
  modules: {},
});
