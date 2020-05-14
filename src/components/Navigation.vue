<template>
  <div id="navigation">
    <div class="flex">
      <div class="icon">
        <van-cell @click="showPopup">
          <van-icon name="wap-nav" />
        </van-cell>
        <!-- 侧边栏 -->
        <van-popup
          v-model="show"
          round
          position="left"
          :style="{ width: '60%',height:'100%'}"
          class="navigation-popup"
        >
          <!-- 引入侧边栏组件 -->
          <sidebar />
        </van-popup>
      </div>
      <div class="title">VUE-MUSIC</div>
      <div class="icon">
        <router-link to="/search">
          <van-icon name="search" />
        </router-link>
      </div>
    </div>
    <div class="wrap2">

      <!-- 引入轮播组件 -->
      <Carousel />

      <div class="login-all-btn">
        <!-- 遮罩层 -->
        <van-button
          text="立即登录"
          block
          @click="userLogin"
        />

        <!-- 遮罩层 -->
        <van-button
          text="立即注册"
          block
          @click="showMask2=true"
        />
        <van-overlay
          :show="showMask2"
          @click="showMask2 = false"
        >
          <div
            class="wrapper"
            @click.stop
          >

            <div class="register-block">
              <Register />

            </div>
          </div>
        </van-overlay>
      </div>

    </div>

    <div class="wrap">
      <van-row>
        <router-link
          to="/sheet"
          tag="div"
        >
          <van-col>推荐</van-col>
        </router-link>
        <router-link
          to="/ranking"
          tag="div"
        >
          <van-col>排行榜</van-col>
        </router-link>
        <router-link
          to="/singer"
          tag="div"
        >
          <van-col>歌手</van-col>
        </router-link>
      </van-row>
    </div>
    <div class="cover">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import sidebar from "@/components/Popup/Sidebar.vue";
import LoginCpn from "@/components/Login/LoginCpn.vue";
import Register from "@/components/Login/Register.vue";
import Sheet from "@/components/Gedan/Sheet.vue";

export default {
  name: "Navigation",
  data() {
    return {
      active: 1,
      show: false,
      // showMask1: false,
      showMask2: false
    };
  },
  components: {
    Carousel,
    sidebar,
    LoginCpn,
    Register,
    Sheet
  },
  created() {},
  mounted() {},
  methods: {
    userLogin() {
      this.$router.push("/login");
    },
    showPopup() {
      this.show = true;
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.flex {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(139, 0, 0);
  margin-top: 0;
}
.icon .van-cell {
  background: rgb(139, 0, 0);
}
.icon i {
  font-size: 2rem;
  cursor: pointer;
  padding-right: 10px;
}
.title {
  font-weight: 600;
  color: #ffffff;
}
.wrap {
  width: 100%;
  background: rgb(204, 105, 163);
  font-size: 0.8rem;
}
.van-row {
  width: 100%;
  display: flex;
  justify-content: space-around;
  background: rgb(139, 0, 0);
  color: #e47813;
  height: 50px;
  line-height: 50px;
}
.van-row .van-col {
  font-size: 20px;
  color: white;
}
.van-row div {
  margin-left: 1.5rem;
}

.cover {
  width: 100%;
  background: green;
}
// 歌单列表展示
.van-row-content {
  background: yellow;
}
// 侧边栏
.navigation-popup {
  padding: 20px 20px;
}
// 遮罩层
/*遮罩层 */
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 80%;
  height: 320px;
  background-color: #fff;
}
.register-block {
  width: 80%;
  height: 360px;
  background: #fff;
}
.carousel {
  padding-top: 0;
  margin-top: 0px;
}
// 登录和注册div
.login-all-btn {
  display: flex;
  flex-direction: row;
}
</style>
