<template>
  <div id="app">
    <router-view 
      :videos="manipulatedVideos">
    </router-view>
  </div>
</template>

<script>
import { getData } from "./api"
import { addIsFavoriteField } from "./util"

export default {
  name: 'App',
  data() {
    return {
      videos: [],
      manipulatedVideos: [],
      viewThreshold: 100,
    };
  },
  methods: {
    async pullData() {
      this.videos = await getData()
      console.log(this.videos)
    },
    // create isFavorite property and send the manipulated data to children
    // in order to handle data easier
    manipulateData() {
      this.manipulatedVideos = addIsFavoriteField(this.videos, this.viewThreshold)
      console.log(this.manipulatedVideos)
    }
  },
  async created() {
    await this.pullData()
    this.manipulateData()
  },
  watch: {
    $route: {
        immediate: true,
        handler(to) {
            document.title = to.meta.title || "Assingment 2"
        }
    },
  },
}
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
