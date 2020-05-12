<template>
  <div>

    <form
      action="#"
      class="login-form"
    >
      <!-- 输入任意文本 -->
      <van-field
        left-icon="friends"
        v-model="text"
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
          type="primary"
          color="red"
          size="small"
        >登录</van-button>
        <van-button
          type="primary"
          size="small"
          color="red"
          to="home"
        >重置</van-button>

      </div>
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
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return { text: "", password: "" };
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
</style>
