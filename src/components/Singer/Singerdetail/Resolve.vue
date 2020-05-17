<template>
  <div id="album">
    <!-- 专辑 -->
    <h3>首页</h3>

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
</style>
