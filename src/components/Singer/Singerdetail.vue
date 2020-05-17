<template>
  <div id="songerdetail">
    <!-- 歌手详情页 -->
    <!-- 加载中 -->
    <div
      class="loading"
      v-show="isloading"
    >
      <van-loading
        type="spinner"
        color="#1989fa"
      />
      <div class="jiazai">加载中</div>
    </div>

    <div
      class="show"
      v-show="isshow"
    >
      <!-- 引入头部组件 -->
      <NavHeader />
      <!-- 图片描述 -->
      <div class="gedan">
        <img v-lazy="details.img1v1Url">
      </div>
      <div class="title">{{details.name}}</div>
      <div class="wrap">
        <van-tabs
          animated
          swipeable
        >
          <van-tab title="主页">
            <!-- 引入主页组件 -->
            <Resolve />
          </van-tab>
          <van-tab title="歌曲"></van-tab>
          <van-tab title="专辑"></van-tab>
          <van-tab title="视频"></van-tab>
          <van-tab title="主页"></van-tab>
          <van-tab title="个人信息"></van-tab>

        </van-tabs>
      </div>
    </div>

  </div>
</template>

<script>
import NavHeader from "@/components/Nav/NavHeader.vue";
import Resolve from "../Singer/Singerdetail/Resolve";

export default {
  name: "Singerdetail",
  data() {
    return {
      details: [],
      isloading: true,
      isshow: false
    };
  },
  components: {
    NavHeader,
    Resolve
  },

  mounted() {
    this.getsonger(this.$route.params.id);
    if (this.details == "") {
      setInterval(() => {
        this.onload();
      });
    } else {
      return;
    }
  },
  methods: {
    getsonger(id) {
      this.axios.get("/artists?id=" + id).then(res => {
        this.details = res.data.artist;
        this.gid = res.data.artist.id;
      });
    },
    onload() {
      if (this.details == "") {
        return;
      } else {
        this.isshow = true;
        this.isloading = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.loading {
  position: absolute;
  left: 2%;
  right: 0;
  top: 50%;
  bottom: 0;
  font-size: 2rem;
  text-align: center;
  color: red;
}
.jiazai {
  font-size: 1.4rem;
}

.van-hairline--bottom div,
span {
  color: #ffffff;
  font-size: 1rem;
}
.van-nav-bar__left i {
  color: #fff;
}
.gedan {
  position: absolute;
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: -47px;
}
.gedan img {
  width: 100%;
  height: 15rem;
}
.title {
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 700;
  position: absolute;
  top: 193px;
  left: 17px;
}
/* 歌手信息 */
.wrap {
  width: 100%;
  font-size: 1.2rem;
  margin-top: 13rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.van-tabs--line {
  width: 100%;
}
.van-tabs__nav--line {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
