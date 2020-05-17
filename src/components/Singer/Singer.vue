<template>
  <div id="songer">
    <div
      class="wrap"
      v-for="(item,index) in songer"
      :key="index"
    >
      <router-link :to="'/singer/'+item.id">
        <img v-lazy="item.img1v1Url" />
      </router-link>
      <div class="describe">
        <div class="title">{{item.name}}</div>
        <div class="album">专辑数:{{item.albumSize}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Singer",
  data() {
    return {
      songer: []
    };
  },

  mounted() {
    this.getsonger();
  },
  methods: {
    getsonger() {
      this.axios.get("/top/artists?offset=0&limit=30").then(res => {
        this.songer = res.data.artists;
      });
    }
  }
};
</script>

<style scoped lang="scss">
#songer {
  padding: 0.5rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
  box-shadow: 0 1px 10px rgb(139, 0, 0);
}
.wrap:hover {
  background: rgb(210, 69, 55);
}
.wrap img {
  width: 10rem;
  height: 8rem;
}
.describe {
  font-size: 1rem;
  font-weight: 700;
  opacity: 0.8;
  text-align: center;
  color: rgb(248, 125, 88);
}
</style>
