<template>
  <div id="app">
    <router-view
      @toggleFav="handleFavoriteField"
      :videos="videos"
      :favoriteVideos="favoriteVideos"
    >
    </router-view>
  </div>
</template>

<script>
import { getData } from "./api";

export default {
  name: "App",
  data() {
    return {
      videos: [],
      favoriteVideos: [],
    };
  },
  methods: {
    async pullData() {
      this.videos = await getData();
    },
    handleFavoriteField(id) {
      console.log("handle favorite field ran");
      for (let video of this.videos) {
        if (video.id === id) {
          video.favorite = !video.favorite;
        }
      }
      this.filterFavoriteVideos();
    },
    filterFavoriteVideos() {
      console.log("filter favorite ran");
      this.favoriteVideos = this.videos.filter((video) => video.favorite);
    },
  },
  async created() {
    await this.pullData();
    this.filterFavoriteVideos();
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "Assingment 2";
      },
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: auto;
}
</style>
