<template>
  <div id="album">
    <!-- 专辑 -->
    <h3>推荐专辑</h3>

    <div class="conten">
      <div
        class="wrap"
        v-for="(item, index) in album"
        :key="index"
      >
        <div class="img">
          <router-link :to="'/album/' + item.id">
            <img v-lazy="item.blurPicUrl">
          </router-link>
        </div>
        <div class="detail">
          <p class="name">{{ item.name }}</p>
          <p class="songer">{{songer.name}}&nbsp;{{item.alias[0]}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Album",
  data() {
    return {
      album: [],
      songer: ""
    };
  },
  props: ["gid"],
  components: {},
  created() {},
  mounted() {
    this.getalbum(this.gid);
  },
  methods: {
    getalbum(id) {
      this.axios.get("/artist/album?id=" + id).then(res => {
        this.album = res.data.hotAlbums;
        this.songer = res.data.artist;
      });
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
#album {
  padding: 1rem 1rem;
}
.conten {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 160px;
}
.img img {
  width: 8rem;
}
.detail {
  font-size: 1rem;
  width: 50%;
  height: 8rem;
  margin-left: 2rem;
}
.songer {
  color: blue;
}
</style>
