<template>
  <div class="home">
    <Navigation />

  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "Home",

  components: {
    Navigation
  },
  data() {
    return {};
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.bottom {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
}
a {
  color: #000;
}
@font-face {
  font-family: "iconfont"; /* project id 1462857 */
  src: url("//at.alicdn.com/t/font_1462857_mp8rtqz0oba.eot");
  src: url("//at.alicdn.com/t/font_1462857_mp8rtqz0oba.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1462857_mp8rtqz0oba.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1462857_mp8rtqz0oba.woff") format("woff"),
    url("//at.alicdn.com/t/font_1462857_mp8rtqz0oba.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1462857_mp8rtqz0oba.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 1.6rem;
  font-style: normal;
  color: #000;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
