<template>
  <div class="home">
    <!-- 遮罩层 -->
    <van-button
      text="登录"
      block
      @click="show = true"
    />
    <van-overlay
      :show="show"
      @click="show = false"
    >
      <div
        class="wrapper"
        @click.stop
      >

        <div class="block">
          <!-- 引入登录表单组件 -->
          <!-- <LoginCpn /> -->
          <Login />

        </div>
      </div>
    </van-overlay>

  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Login
  },
  data() {
    return {
      show: false
    };
  }
};
</script>
<style >
.home {
  background: rgb(247, 7, 7);
  height: 500px;
  padding: 10px;
}
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
.carousel {
  padding-top: 0;
  margin-top: 0px;
}
</style>
