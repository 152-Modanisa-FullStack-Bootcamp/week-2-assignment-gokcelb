<template>
  <div id="video-card-favorites">
    <div class="video">
      <img
        @click="goToWatchPage"
        @mouseover="imgHovered = true"
        @mouseleave="imgHovered = false"
        class="video-img"
        :src="imgHovered ? video.hoverImage : video.coverImage"
        :alt="video.title"
      />
      <i class="bi bi-heart-fill favorite"></i>
    </div>
    <div class="video-details">
      <p><strong>{{ video.title }}</strong></p>
      <p>
        <span>{{ video.viewCount }} views</span>,
        <span>Published {{ video.publishDateInMonth }} months ago</span>
      </p>
      <div class="owner-details">
        <img class="owner-img" :src="video.ownerImage" :alt="video.ownerName" />
        <p>{{ video.ownerName }}</p>
      </div>
      <br>
      <p class="desc">{{ video.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoCardFavorites",
  props: {
    video: Object
  },
  data() {
    return {
      imgHovered: false,
    };
  },
  methods: {
    goToWatchPage() {
      this.$router.push(`/watch/${this.video.id}`)
    }
  }
}
</script>

<style scoped>
  #video-card-favorites {
    width: 900px;
    display: flex;
    margin-bottom: 20px;
  }

  .video-img {
  width: 360px;
  height: 200px;
  margin-right: 20px;
}

.video-img:hover {
  cursor: pointer;
}

.video-details {
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  line-height: 1.3rem;
}

.owner-img {
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 7px;
}

.owner-details {
  display: flex;
  align-items: center;
}

.desc {
  font-size: 15px;
}

.video {
  position: relative;
}

.favorite {
  position: absolute;
  top: 15px;
  right: 35px;
  color: red;
  cursor: pointer;
  font-size: 18px;
}
</style>