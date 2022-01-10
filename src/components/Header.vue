<template>
  <header>
      <router-link to="/favorites"><button id="favorites-button">My Favorites</button></router-link>
  </header>
</template>

<script>
export default {

}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");

header {
    width: 98%;
    min-height: 60px;
    margin-top: 20px;
    background-color: palevioletred;
    border-radius: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

#favorites-button {
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