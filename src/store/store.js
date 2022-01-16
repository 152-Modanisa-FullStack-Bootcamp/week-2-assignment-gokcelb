import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export const state = {
  videos: [],
  favoriteVideos: [],
}

export const mutations = {
  addToFavorites(state, video) {
    state.favoriteVideos.push(video)
    video.favorite = true
  },
  removeFromFavorites(state, video) {
    state.favoriteVideos = state.favoriteVideos.filter(v => v.id !== video.id)
    video.favorite = false
  },
  setVideos(state, videos) {
    state.videos = videos
  },
  setFavoriteVideos(state, favVideos) {
    state.favoriteVideos = favVideos
  }
}

export const actions = {
  async retrieveVideos({commit}, retrieveVideosCall) {
    const videos = await retrieveVideosCall()
    commit("setVideos", videos)
    commit("setFavoriteVideos", videos.filter(video => video.favorite))
  }
}

export const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store