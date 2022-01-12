<template>
  <div id="favorites">
    <header-component></header-component>
    <div class="video-container">
      <!-- send child's emit back to parent via $listeners -->
      <video-card-favorites
        v-on="$listeners"
        v-for="video in favoriteVideos"
        :key="video.id"
        :video="video"
      >
      </video-card-favorites>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import VideoCardFavorites from "../components/VideoCardFavorites.vue";

export default {
  name: "Favorites",
  components: {
    HeaderComponent,
    VideoCardFavorites,
  },
  props: {
    favoriteVideos: Array,
  },
};
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