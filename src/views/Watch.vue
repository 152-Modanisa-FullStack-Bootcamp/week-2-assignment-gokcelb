<template>
  <div id="watch">
      <header-component></header-component>
      <p class="watch-info">Video watch id: <span><strong>{{$route.params.watchid}}</strong></span></p>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'

export default {
  name: "Watch",
  components: {
    HeaderComponent
  }
}
</script>

<style scoped>
  #watch {
    margin-top: 20px;
    margin-left: 20px;
  }

  .watch-info {
    font-size: 18px;
    margin-top: 30px;
    margin-left: 8px;
  }
</style>