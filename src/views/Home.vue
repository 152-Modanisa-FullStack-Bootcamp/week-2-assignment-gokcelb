<template>
  <div id="home">
    <header-component></header-component>
    <div class="video-container">
      <video-card-home v-for="video in videos" :key="video.id" :video="video">
      </video-card-home>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import VideoCardHome from "@/components/VideoCardHome";

export default {
  name: "Home",
  components: {
    HeaderComponent,
    VideoCardHome
  },
  props: {
      videos: Array,
  }
}
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.video-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 30px;
}
</style>