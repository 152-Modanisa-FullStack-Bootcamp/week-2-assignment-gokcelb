<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { getData } from "@/api";

export default {
  name: "App",
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "Assingment 2";
      },
    },
  },
  created: function() {
    this.$store.dispatch("retrieveVideos", getData)
  }
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
