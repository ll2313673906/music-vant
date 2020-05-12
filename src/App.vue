<template>
  <div id="app">
    <div id="nav">
      <Carousel />
    </div>
    <router-view />
  </div>
</template>
<script>
import Carousel from "./components/Carousel.vue";
export default {
  data() {
    return {};
  },
  components: { Carousel }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(247, 7, 7);
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
