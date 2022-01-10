<template>
  <div id="video-card-home">
    <div class="video">
      <img
        @click="goToWatchPage"
        @mouseover="imgHovered = true"
        @mouseleave="imgHovered = false"
        class="video-img"
        :src="imgHovered ? video.hoverImage : video.coverImage"
        :alt="video.title"
      />
      <!-- icon class changes according to isFavorite field -->
      <i 
        class="bi favorite" 
        :class="{'bi-heart-fill': video.favorite, 'bi-heart': !video.favorite}">
      </i>
    </div>
    <div class="video-details">
      <img class="owner-img" :src="video.ownerImage" :alt="video.ownerName" />
      <div class="text-details">
        <p>
          <strong>{{ video.title }}</strong>
        </p>
        <p class="small">{{ video.ownerName }}</p>
        <p class="smaller">
          <span>{{ video.viewCount }} views</span>,
          <span>Published {{ video.publishDateInMonth }} months ago</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoCard",
  props: {
    video: Object,
  },
  data() {
    return {
      imgHovered: false,
    };
  },
  methods: {
    goToWatchPage() {
      this.$router.push(`/watch/${this.video.id}`)
    },
  },
};
</script>

<style scoped>
#video-card-home {
  width: 360px;
  margin-bottom: 25px;
}

.video-img {
  width: 360px;
  height: 200px;
}

.video-img:hover {
  cursor: pointer;
}

.video-details {
  margin: 5px 0;
  display: flex;
}

.owner-img {
  width: 36px;
  height: 36px;
  cursor: pointer;
}

.text-details {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
}

.small {
  margin-top: 1px;
  font-size: 14px;
}

.smaller {
  font-size: 12px;
  margin-top: 1px;
  color: darkgrey;
}

.video {
  position: relative;
}

.favorite {
  position: absolute;
  top: 13px;
  right: 10px;
  color: red;
  cursor: pointer;
  font-size: 18px;
}
</style>