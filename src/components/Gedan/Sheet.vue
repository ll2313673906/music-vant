<template>
  <div id="sheet">
    <van-grid :column-num="2">
      <van-grid-item
        v-for="(item,index) in sheetarray"
        :key="index"
      >
        <div class="img">
          <div class="count">
            <van-icon name="service-o" />
            :
            {{item.playCount | counts}} 万
          </div>
          <router-link :to="'/sheet/'+item.id">
            <img v-lazy="item.coverImgUrl" />
          </router-link>
          <div class="describe">{{item.name}}</div>
        </div>
      </van-grid-item>

    </van-grid>
  </div>
</template>

<script>
export default {
  name: "Sheet",
  data() {
    return {
      pic: [],
      sheetarray: []
    };
  },
  filters: {
    counts(value) {
      return Math.floor(value / 10000);
    }
  },
  methods: {
    // 推荐歌单
    getsheet() {
      this.axios.get("/top/playlist").then(res => {
        this.sheetarray = res.data.playlists;
      });
    },
    // 轮播图
    getpic() {
      this.axios.get("/banner?type=1").then(res => {
        this.pic = res.data.banners;
      });
    },
    nohave() {
      this.$dialog.alert({
        message:
          "抱歉,该图片仅供展示,不能播放该音乐,如果你喜欢这首音乐,请搜索获得！"
      });
    }
  },
  mounted() {
    this.getsheet();
    this.getpic();
  }
};
</script>

<style scoped lang="scss">
/* 轮播图 */
.pic {
  margin-top: -55px;
  background: rgb(210, 69, 55);
  height: 10rem;
}
.pic img {
  width: 85%;
  height: 9rem;
  margin-top: 1rem;
  margin-left: 1.5rem;
}
.title {
  font-size: 1rem;
  border-left: 4px solid red;
  margin: 1rem;
  font-weight: bolder;
  text-indent: 1rem;
}
/* 歌单 */
.wrap > div {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.list {
  width: 40%;
}
.img {
  position: relative;
}
.img img {
  width: 8rem;
  margin: 0.6rem;
}
/* 描述 */
.describe {
  font-size: 1rem;
  color: rgb(40, 46, 46);
}
/* 播放量 */
.count {
  font-size: 0.5rem;
  position: absolute;
  right: 10px;
  top: 18px;
  color: #ffffff;
}
.count img {
  border-radius: 1rem;
}
</style>
