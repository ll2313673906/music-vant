<template>
  <div id="register">
    <div class="register-form">
      <span class="title">欢迎注册</span>
      <transition
        appear
        enter-active-class="animated lightSpeedIn"
        leave-active-class="animated rotateInUpLeft"
        :duration="3000"
      >
        <div class="wrap">
          <van-cell-group>
            <van-field
              v-model="nickname"
              required
              clearable
              label="昵称"
              placeholder="请输入昵称"
              error
            />
            <van-field
              v-model="phone "
              required
              clearable
              label="手机号"
              placeholder="请输入手机号"
              error
            />

            <van-field
              v-model="password"
              type="password"
              label="密码"
              placeholder="请输入密码"
              required
              error
            />
            <van-field
              v-model="captcha "
              required
              clearable
              label="验证码"
              placeholder="请输入验证码"
              error
            />
            <div class="center">
              <van-button
                plain
                type="info"
                size="normal"
                @click="sendcaptcha"
              >发送验证码</van-button>
            </div>
            <van-button
              type="info"
              @click="register"
              block
              class="register-btn"
            >注册</van-button>
          </van-cell-group>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      phone: "",
      password: "",
      captcha: "",
      nickname: ""
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    sendcaptcha(e) {
      if (this.phone == "") {
        this.$dialog.alert({
          message: "手机号不能为空!"
        });
      } else {
        let num = 60;
        let timer = setInterval(function() {
          num--;
          e.target.innerHTML = num + "秒后重新获取";
          e.target.disabled = " disabled";
          if (num === 0) {
            e.target.disabled = "";
            e.target.innerHTML = "发送验证码";
            clearInterval(timer);
          }
        }, 1000);
        this.axios.get("/captcha/sent?phone=" + this.phone).then(res => {
          if (res.data.code == 200) {
            this.$notify({ type: "primary", message: "验证码发送成功" });
          }
        });
      }
    },
    register() {
      if (
        this.phone == "" ||
        this.password == "" ||
        this.nickname == "" ||
        this.captcha == ""
      ) {
        this.$dialog.alert({
          message: "手机号或者密码,昵称不能为空!"
        });
      } else {
        // 验证手机号是否注册过
        this.axios
          .get("/cellphone/existence/check?phone=" + this.phone)
          .then(res => {
            if (res.data.exist == 1 || res.data.exist == 2) {
              this.$dialog
                .alert({
                  message: "该手机号已经注册了账号,请直接登录"
                })
                .then(() => {
                  this.$router.push("/login2");
                });
            } else {
              // 验证验证码
              this.axios
                .get(
                  "/captcha/verify?phone=" +
                    this.phone +
                    "&captcha=" +
                    this.captcha
                )
                .then(res => {
                  if (res.data.code == !200) {
                    this.$dialog.alert({
                      message: "验证码错误,请重新输入验证码！"
                    });
                  } else {
                    // 注册
                    this.axios
                      .get(
                        "/register/cellphone?phone=" +
                          this.phone +
                          "&password=" +
                          this.password +
                          "&captcha=" +
                          this.captcha +
                          "&nickname=" +
                          this.nickname
                      )
                      .then(res => {
                        this.$dialog
                          .alert({
                            message: "注册账号成功！"
                          })
                          .then(() => {
                            this.$router.push("/login2");
                          });
                      });
                  }
                });
            }
          });
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.register-form {
  padding: 30px;
  padding-left: 22px;
  margin-bottom: 0;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 20px;
}
.center {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 70px;
}
.register-btn {
  background: rgb(139, 0, 0);
}
</style>
