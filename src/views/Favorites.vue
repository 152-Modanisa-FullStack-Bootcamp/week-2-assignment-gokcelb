<template>
  <div id="favorites">
    <header-component></header-component>
    <div class="video-container">
      <video-card-favorites v-for="video in favoriteVideos" :key="video.id" :video="video">
      </video-card-favorites>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent"
import VideoCardFavorites from '../components/VideoCardFavorites.vue'

export default {
  name: "Favorites",
  components: {
    HeaderComponent,
    VideoCardFavorites,
  },
  props: {
    videos: Array
  },
  computed: {
    // in ordeer to only send favorite videos to VideoCardFavorites component
    favoriteVideos() {
      return this.videos.filter(video => video.favorite)
    }
  }
}
</script>

<style scoped>
#favorites {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.video-container {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

</style>