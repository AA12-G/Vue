<template>
  <div class="app-container">
    <h1>App2 组件</h1>

    <!-- <a href="#/home">首页</a>
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a> -->

    <!-- 当安装了 vue-router 之后，就可以使用 router-link 来代替普通的 a链接了 -->
    <!-- to 后面可以不用加 # 号 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/movie/1">雷神</router-link>
    <router-link to="/movie/2">洛基</router-link>
    <router-link to="/movie/3">复联</router-link>
    <router-link to="/about">关于</router-link>

    <hr />

    <!-- 只要在项目中安装和配置了 vue-router ,就可以使用 router-view 这个组件了 -->
    <!-- 它的作用就是：占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less" scoped>
.app-container {
  background-color: aqua;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
}
</style>
