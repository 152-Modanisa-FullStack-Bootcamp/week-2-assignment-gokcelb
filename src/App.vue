<template>
  <div id="app">
    <router-view :videos="videos"></router-view>
  </div>
</template>

<script>
import { getData } from "./api"

export default {
  name: 'App',
  data() {
    return {
      videos: [],
    };
  },
  methods: {
    async pullData() {
      this.videos = await getData();
      console.log(this.videos);
    },
  },
  created() {
    this.pullData();
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
