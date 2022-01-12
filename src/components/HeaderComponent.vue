<template>
  <header>
    <h1 @click="goToHomePage" class="home-title">Home</h1>
    <button @click="goToFavoritesPage" id="favorites-button">My Favorites</button>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      userid: "bootcamp"
    }
  },
  methods: {
    goToHomePage() {
      const path = "/"
      if (this.$route.path !== path) this.$router.push(path)
    },
    goToFavoritesPage() {
      const path = `/favorites/${this.userid}`
      if (this.$route.path !== path) this.$router.push(path)
    }
  }
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");

header {
  width: 98%;
  min-height: 60px;
  margin-top: 20px;
  background-color: red;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home-title {
  color: white;
  font-size: 30px;
  margin-left: 30px;
  cursor: pointer;
}

#favorites-button {
  color: #2c3e50;
  font-weight: 600;
  margin-right: 40px;
  font-size: 16px;
  cursor: pointer;
  background-color: white;
  border-style: none;
  width: 150px;
  height: 30px;
  border-radius: 5px;
}
</style>