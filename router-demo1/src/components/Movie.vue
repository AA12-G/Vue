<template>
  <div class="app-movie">
    <!-- 开启 props 传参后，$route.params. 可以省略不写 -->
    <h1>Movie 组件 --- {{ mid }}</h1>

    <hr />

    <button @click="goorback">前进或后退</button>
    <!-- 在行内使用编程导航跳转时，可以直接在放法里写，但 this 要省略，否则会报错！ -->
    <button @click="$router.forward()">forward 前进</button>
    <button @click="$router.back()">back 后退</button>
  </div>
</template>

<script>
export default {
  name: "App",
  // 接收 pros 数据
  props: ["mid"],
  methods: {
    goorback() {
      // 如果后退和前进的层数超过上限，则原地不动
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.app-movie {
  background-color: blueviolet;
  overflow: hidden;
  margin: 1px;
  padding: 190px;
}
</style>
