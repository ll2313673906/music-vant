<template>
  <div>
    <!-- 个人信息 -->

    <div class="card">
      <h3> 个人信息</h3>
      <div class="content">
        <span class="con-title">{{personal.name }}</span>
        <p
          class="con-body"
          v-show="isshow"
        >
          别名：{{alias}}
        </p>
        <p>简介：{{personal.briefDesc}}</p>
        <div class="con-body-btn"><button>开始</button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Personaldetail",
  data() {
    return {
      personal: [],
      alias: "",
      isshow: true
    };
  },
  props: ["gid"],
  components: {},

  mounted() {
    this.getpsersonal(this.gid);
  },
  methods: {
    getpsersonal(id) {
      this.axios.get("/artists?id=" + id).then(res => {
        this.personal = res.data.artist;
        this.alias = this.personal.alias[0];
        if (this.personal.alias.length == 0) {
          this.isshow = false;
        } else {
          return;
        }
      });
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.card {
  width: 80%;
  height: 350px;
  padding: 10px 10px;
  border: 1px solid #eee;
  margin: auto;
}

.content {
  width: 100%;
  height: 200px;
  margin-top: 30px;
}
.content p {
  text-indent: 2em;
  font-size: 0.7rem;
}
.content button {
  width: 160px;
  height: 45px;
  background: rgb(80, 151, 239);
  border-radius: 4px;
  color: white;
  border: none;
}
.con-body-btn {
  text-align: center;
  margin-top: 30px;
}
</style>
