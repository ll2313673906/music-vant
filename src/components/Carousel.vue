<template>
  <div class="carousel">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item><img
          src="https://i.loli.net/2020/05/12/qjbSKrn2l8LyIzR.jpg"
          alt="轮播图"
        ></van-swipe-item>
      <van-swipe-item><img
          src="https://i.loli.net/2020/05/12/dVMKqUEn5wfusX4.jpg"
          alt="轮播图"
        ></van-swipe-item>
      <van-swipe-item><img
          src="https://i.loli.net/2020/05/12/pLJ7RW8KzDt3bTC.jpg"
          alt="轮播图"
        ></van-swipe-item>
      <van-swipe-item><img
          src="https://i.loli.net/2020/05/12/JZSTBFeaoq5b9jm.jpg"
          alt="轮播图"
        ></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  height: 250px;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>
