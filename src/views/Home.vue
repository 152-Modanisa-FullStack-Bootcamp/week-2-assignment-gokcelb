<template>
  <div id="home">
    <Header></Header>
    <div class="video-container">
        <VideoCard 
            v-for="video in videos" 
            :key="video.id"
            :video="video">
        </VideoCard>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"
import VideoCard from "@/components/VideoCard"
import { getData } from "@/api.js"

export default {
    name: "Home",
    components: {
        Header,
        VideoCard
    },
    data() {
        return {
            videos: []
        }
    },
    methods: {
        async pullData() {
            this.videos = await getData()
            console.log(this.videos);
        }
    },
    created() {
        this.pullData()
    }
}
</script>

<style>
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
    margin-bottom: 20px;
}
</style>