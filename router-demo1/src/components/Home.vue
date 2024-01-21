<template>
  <div class="app-home">
    <h1>Home 组件</h1>

    <hr />

    <button @click="pushtiao">通过 push 来跳转页面</button>
    <button @click="replacetiao">通过 repalce 来跳转页面</button>
    <router-link to="/main">访问 main 主页</router-link>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    pushtiao() {
      // 有历史记录
      this.$router.push("/movie/1");
    },
    replacetiao() {
      // 没有历史记录，替换掉了
      this.$router.replace("/movie/1");
    },
  },
};
</script>

<style lang="less" scoped>
.app-home {
  background-color: cornflowerblue;
  overflow: hidden;
  margin: 1px;
  padding: 190px;
}
</style>
