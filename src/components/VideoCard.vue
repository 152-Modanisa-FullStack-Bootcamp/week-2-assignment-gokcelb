<template>
  <div class="video-card">
      <div class="video">
        <img
        @mouseover="imgHovered = true" 
        @mouseleave="imgHovered = false" 
        class="video-img" 
        :src="imgHovered ? video.hoverImage : video.coverImage" 
        :alt="video.title">
        <i class="bi bi-heart favorite"></i>
      </div>
      <div class="video-details">
          <img 
            class="owner-img" 
            :src="video.ownerImage" 
            :alt="video.ownerName">
          <div class="text-details">
              <p><strong>{{ video.title }}</strong></p>
              <p>{{ video.ownerName }}</p>
              <p><span>{{ video.viewCount }} views</span>, <span>Published {{ video.publishDateInMonth }} months ago</span></p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "VideoCard",
    props: {
        video: Object
    },
    data() {
        return {
            imgHovered: false
        }
    }
}
</script>

<style scoped>
.video-card {
    width: 360px;
    margin-top: 20px;
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

.video {
    position: relative;
}

.favorite {
    position: absolute;
    top: 10px;
    right: 8px;
    color: red;
    cursor: pointer;
    font-size: 18px;
}
</style>