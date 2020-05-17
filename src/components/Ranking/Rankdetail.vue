<template>
  <div>
    <detail />
  </div>
</template>

<script>
import detail from "@/components/Common/Detail";
export default {
  name: "Rankdetail",
  data() {
    return {
      // 传递到子组件中的值
      title: "排行榜"
    };
  },
  components: {
    detail
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
</style>
