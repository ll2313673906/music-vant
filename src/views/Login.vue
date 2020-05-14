<template>
  <div>

    <van-overlay
      :show="showMask"
      @click="showMask = true"
    >
      <div
        class="wrapper"
        @click.stop
      >

        <div class="register-block">
          <LoginCpn />

        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import LoginCpn from "@/components/Login/LoginCpn.vue";
export default {
  name: "Login",
  data() {
    return {
      showMask: true
    };
  },
  components: { LoginCpn },
  created() {},
  mounted() {},
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
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
</style>
