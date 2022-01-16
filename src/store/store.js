import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    favoriteVideos: []
  },
  getters: {
    isFavorite: state => id => {
      return state.favoriteVideos.some(video => video.id === id)
    }
  },
  mutations: {
    addToFavorites(state, payload) {
      state.favoriteVideos.push(payload)
    },
    removeFromFavoritesByID(state, id) {
      state.favoriteVideos = state.favoriteVideos.filter(video => video.id !== id)
    }
  },
  actions: {
    toggleFavorite({commit, getters}, video) {
      const isFavorite = getters.isFavorite(video.id)
      isFavorite ? commit("removeFromFavoritesByID", video.id) : commit("addToFavorites", video)
    }
  }
})

export default store