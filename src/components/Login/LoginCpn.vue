<template>
  <div id="login">
    <div class="login-form">
      <span>欢迎登录</span>

      <!-- 输入任意文本 -->
      <van-field
        left-icon="friends"
        v-model="phone"
        placeholder="请输入账号"
      />

      <!-- 输入密码 -->
      <van-field
        left-icon="comment"
        v-model="password"
        type="password"
        placeholder="请输入密码"
      />

      <div class="login-btn">
        <van-button
          type="submit"
          color="red"
          size="small"
          @click="userlogin"
        >登录</van-button>
        <van-button
          type="primary"
          size="small"
          color="red"
          to="home"
          @click="reset"
        >重置</van-button>

      </div>
      <div><span class="title">其他登录方式</span></div>
      <div class="login-bottom">
        <ul>
          <li>
            <van-icon
              name="https://i.loli.net/2020/05/12/vk9MJ4QOldpwNAm.png"
              size="2rem"
            />
          </li>
          <li>
            <van-icon
              name="https://i.loli.net/2020/05/12/5g2VcROCAfKeEiD.png"
              size="2rem"
            />
          </li>
          <li>
            <van-icon
              name=" https://i.loli.net/2020/05/12/ar38K1cHw26EQDZ.png"
              size="2rem"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      password: ""
    };
  },
  methods: {
    userlogin() {
      if (this.phone == "" || this.password == "") {
        this.$dialog.alert({
          message: "账号或者密码不能为空!"
        });
      } else {
        this.axios
          .get(
            "/login/cellphone?phone=" +
              this.phone +
              "&password=" +
              this.password
          )
          .then(res => {
            this.$store.state.uid = res.data.account.id;
            // 存入sessionStorage 防止刷新数据消失
            let id = JSON.stringify(res.data.account.id);
            sessionStorage.setItem("uid", id);
            this.$dialog
              .alert({
                message: "登录成功!"
              })
              .then(() => {
                this.$router.push("/home");
              });
          });
      }
    },
    reset() {
      this.phone = "";
      this.password = "";
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.login-form {
  padding: 10px;
  padding-left: 0px;
  margin-bottom: 0;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 20px;
}
.login-btn {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.login-bottom ul {
  display: block;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.title {
  font-size: 14px;
  color: red;
}
</style>
