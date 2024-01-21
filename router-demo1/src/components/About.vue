<template>
  <div class="app-about">
    <h1>About 组件</h1>

    <!-- 子级路由链接 -->
    <router-link to="/about/tab1">tab1</router-link>
    <router-link to="/about/tab2">tab2</router-link>

    <hr />

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less" scoped>
.app-about {
  background-color: brown;
  overflow: hidden;
  margin: 1px;
  padding: 190px;
}
</style>
