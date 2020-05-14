<template>
  <div class="home">
    <Navigation />
    <!-- <Carousel /> -->

  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
// import Carousel from "@/components/Carousel.vue";

export default {
  name: "Home",
  components: {
    Navigation
  },
  data() {
    return {
      show: false
    };
  }
};
</script>
<style scoped>
.home {
  height: 100%;
  padding: 10px;
}
</style>
