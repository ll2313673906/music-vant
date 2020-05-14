<template>
  <div id="user">
    <!-- 引入头部导航栏 -->
    <NavHeader
      :title="message"
      :search="search"
    />
    <div class="gedan">收藏的歌单</div>
    <div
      class="user"
      v-for="(item, index) in userarr"
      :key="index"
    >
      <div class="wrap">
        <router-link :to="'/home/' + item.id">
          <div class="img">
            <img v-lazy="item.coverImgUrl" />
          </div>
        </router-link>
        <div class="message">
          <p>{{ item.name }}</p>
          <p>播放:{{ item.playCount | count }}次</p>
          <p>创建者:{{ item.creator.nickname }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavHeader from "@/components/Nav/NavHeader.vue";
export default {
  name: "User",
  data() {
    return {
      message: "用户信息",
      search: "",
      userarr: []
    };
  },
  filters: {
    count(value) {
      if (value > 1000) {
        return Math.floor(value / 10000) + "万";
      } else {
        return value;
      }
    }
  },
  components: { NavHeader },

  mounted() {
    this.getuser;
  },

  computed: {
    //   获取用户的信息
    getuser() {
      if (!sessionStorage.getItem("uid")) {
        this.$dialog
          .alert({
            message: "你还没有登录，请登录！"
          })
          .then(() => {
            this.$router.push("/login");
          });
      }
      if (this.$store.state.uid == "") {
        this.$store.state.uid = JSON.parse(sessionStorage.getItem("uid"));
      }
      this.axios
        .get("/user/playlist?uid=" + this.$store.state.uid)
        .then(res => {
          this.userarr = res.data.playlist;
        });
    }
  }
};
</script>

<style scoped lang="scss">
.gedan {
  font-weight: bold;
  font-size: 1.2rem;
  margin: 1rem;
}
.user {
  margin: 1rem;
}
.wrap {
  display: flex;
}
.img img {
  width: 6rem;
  margin-right: 0.5rem;
}
p {
  font-size: 0.8rem;
}
</style>
