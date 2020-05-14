<template>
  <div>
    <!-- 头部导航栏 -->
    <van-nav-bar
      :title="title"
      left-text="返回"
      right-text="首页"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
  name: "NavHeader",
  props: ["title", "search"],
  data() {
    return {};
  },

  methods: {
    //   返回
    onClickLeft() {
      this.$router.go(-1);
    },
    // 返回首页
    onClickRight() {
      this.$router.push("/home");
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
</style>
