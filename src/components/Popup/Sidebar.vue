<template>
  <div>
    <div class="header">
      <div class="img">
        <img
          ref="img"
          :src="user.avatarUrl"
        />
      </div>
      <div
        ref="name"
        class="name"
      >{{user.signature}}</div>
    </div>
    <div
      ref="nickname"
      class="nickname"
    >{{user.nickname}}</div>
    <div class="icon">
      <div
        class="added"
        @click="nohave"
      >
        <van-icon name="comment-o" />
        <div class="iconname">我的消息</div>
      </div>
      <div
        class="added"
        @click="nohave"
      >
        <van-icon name="friends-o" />
        <div class="iconname">我的好友</div>
      </div>
      <div
        class="added"
        @click="nohave"
      >
        <van-icon name="music-o" />
        <div class="iconname">听歌识曲</div>
      </div>
      <div
        class="added"
        @click="nohave"
      >
        <van-icon name="star-o" />
        <div class="iconname">个信装扮</div>
      </div>
    </div>
    <div class="nav">
      <router-link to="/user">
        <div class="user">用户信息</div>
      </router-link>
      <div
        class="tool"
        @click="nohave"
      >工具</div>
      <div
        class="Scan"
        @click="nohave"
      >扫一扫</div>
      <router-link to="/login">
        <div class="login">切换账号</div>
      </router-link>
      <router-link to="/about">
        <div class="about">关于我们</div>
      </router-link>
      <div
        class="setting"
        @click="nohave"
      >设置</div>
    </div>
    <footer>
      <div>
        <button
          class="imgicon"
          @click="signout"
        >退出登录</button>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      user: []
    };
  },

  methods: {
    nohave() {
      this.$toast("暂时还没有功能");
    },

    //   退出
    signout() {
      this.$dialog
        .confirm({
          message: "您确定要退出当前账号吗?",
          confirmButtonText: "退出", //改变确认按钮上显示的文字
          cancelButtonText: "取消" //改变取消按钮上显示的文字
        })
        .then(() => {
          sessionStorage.removeItem("uid");
          // this.reload();
          this.$router.push("/login");
        })
        .catch(() => {});
    },
    // 获取用户的信息
    getuser() {
      if (!JSON.parse(sessionStorage.getItem("uid"))) {
        // 默认，无登录时候
        this.$refs.img.src =
          "https://i.loli.net/2020/05/12/dVMKqUEn5wfusX4.jpg";
        this.$refs.name.innerHTML = "当前无账号，请登录！";
      } else {
        if (this.$store.state.uid == "") {
          this.$store.state.uid = JSON.parse(sessionStorage.getItem("uid"));
        }
        // 获取vuex的id获取信息
        this.axios
          .get("/user/detail?uid=" + this.$store.state.uid)
          .then(res => {
            this.user = res.data.profile;
          });
      }
    }
  },
  mounted() {
    this.getuser();
  }
};
</script>

<style scoped lang="scss">
/* header */
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgb(158, 122, 218);
  margin: 1rem;
  padding-top: 3rem;
}
.img img {
  width: 4rem;
  color: rgb(230, 126, 67);
  border-radius: 50%;
}
.name {
  font-size: 0.8rem;
  text-indent: 2rem;
  margin-left: 0.4rem;
  color: rgb(41, 172, 196);
}
.nickname {
  font-size: 1.2rem;
  font-weight: 600;
  color: rgb(223, 59, 59);
  text-indent: 1rem;
  position: absolute;
  top: 6rem;
  left: 45%;
}
/* icon */
.icon {
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  margin-top: 1rem;
}
.added .van-icon {
  font-size: 1.8rem;
  color: red;
  opacity: 0.8;
}

.iconname {
  font-size: 0.2rem;
  text-align: center;
}
/* nav */
.nav {
  margin-top: 1.8rem;
}
.nav div {
  width: 100%;
  height: 2rem;
  background: #ccc;
  text-align: center;
  margin-top: 10%;
  border-radius: 1rem;
  line-height: 2rem;
  color: black;
  font-weight: 400;
}
/* 底部 */
footer {
  position: fixed;
  bottom: 5rem;
  left: 30%;
  button {
    background: red;
    width: 7rem;
    height: 2.5rem;
    border-radius: 20px;
    border: none;
    color: #fff;
  }
}
.iconfont {
  font-size: 3rem;
}
</style>
