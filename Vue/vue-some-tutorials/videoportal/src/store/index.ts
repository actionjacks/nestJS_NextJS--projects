import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { ShowPopup, State } from './stateTypes';
import Api from '@/service/videosFromMirage'
import ApiUser from '@/service/user'
import { Video, Videos } from '@/Classes/Videos'
import { User } from '@/Classes/Users';

export type Tags = 'firstTag' | 'secondTag' | 'thirdTag'
export type Tag = Record<number, Tags>

export const key: InjectionKey<Store<State>> = Symbol()
export const store = createStore<State>({
  state: {
    videos: [],
    tags: {},
    playedVideos: [],
    users: [],
    currentUser: null,
    showPopup: {
      title: '',
      position: 'bottom',
      show: false
    }
  },
  getters: {
    getPopup(state) {
      return state.showPopup
    },
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
    },
    users(state) {
      return state.users
    },
    currentUser(state) {
      return state.currentUser
    }
  },
  mutations: {
    SET_POPUP(state: { showPopup: ShowPopup }, payload) {
      state.showPopup = {
        ...payload
      }
    },
    /**
    * @param {Videos[]} state
    */
    SET_VIDEOS(state: { videos: Videos[] }, videos) {
      state.videos.push(videos)
    },
    SET_USERS(state: { users: User[] }, user) {
      state.users.push(user)
    },
    CLEAR_USERS(state: { users: User[] }, _) {
      state.users = []
      window.localStorage.currentUser = JSON.stringify({})
    },
    SET_CURRENT_USER(state: { currentUser: User | null }, user) {
      state.currentUser = user
      window.localStorage.currentUser = JSON.stringify(user)
    },
    LOGOUT_USER(state: { currentUser: User | null }) {
      state.currentUser = null
      window.localStorage.removeItem('currentUser')
    },
    CLEAR_VIDEOS(state: { videos: Videos[] }, _) {
      state.videos = []
    },
    DEDIT_VIDEO(state, video) {
      state.videos.forEach((video_) => {
        if (video_.id === video.id) {
          video_ = video
        }
      })
    },
    DELETE_VIDEO(state, video) {
      const newState = state.videos.filter(({ id }) => id !== video.id)
      state.videos = newState
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
    startPopup({ commit }, payload) {
      commit('SET_POPUP', payload)
    },
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
    async editVideo({ commit }, video) {
      const response = await Api().put(`/videos/${video.id}`, video)
      response.status === 200 || response.status === 204
        ? commit('DEDIT_VIDEO', video)
        : new Error('Cant edit')
      return response
    },
    async deleteVideo({ commit }, video) {
      const response = await Api().delete(`/videos/${video.id}`)
      return response.status === 200 || response.status === 204
        ? commit('DELETE_VIDEO', video)
        : new Error('Cant del')

    },
    clearVideos({ commit }) {
      commit('CLEAR_VIDEOS')
    },
    clearUsers({ commit }) {
      commit('CLEAR_USERS')
    },
    async loginUser({ commit }, payload) {
      const response = await ApiUser().post('/sessions', payload)
      const user = response.data.data.attributes
      commit('SET_CURRENT_USER', user)
    },
    async registerUser({ commit }, payload) {
      const response = await ApiUser().post('/users', payload)
      const user = response.data.data.attributes
      console.log({ user })
      commit('SET_CURRENT_USER', user)
    },
    logoutUser({ commit }) {
      commit('LOGOUT_USER')
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
    },
    async getUsers({ commit }) {
      const result: {
        //todo move types to file todo refactor API types
        data: { type: string, id: string, attributes: User }[]
      } = await (await Api().get('/users')).data

      result.data.forEach((user) => {
        const { id } = user
        const { admin, email, name, playedVideos } = user.attributes
        commit('SET_USERS', new User({
          admin, email, name, playedVideos, id: Number(id)
        }))
      })
    },
    async loadCurrentUser({ commit }) {
      if (window.localStorage.getItem('currentUser') === null) {
        return
      }
      const user_ = JSON.parse(window.localStorage.currentUser)
      commit('SET_CURRENT_USER', user_)
    }
  },
  modules: {},
});
