// 导入vue这个包，得到Vue 构造函数
import Vue from 'vue'
// 导入 App.vue 根组件，将来要把 App.vue 中的模板结构渲染到HTML页面中
import App from './App2.vue'

// 导入路由模块，目的：拿到路由的实例对象
// 在进行模块化导入的时候，如果给定的是文件夹，则默认导入这个文件夹，名字叫 index.js 的文件
import router from '@/router/index.js'

// 导入需要被全局注册的组件
import Count from '@/components/Count.vue'
Vue.component('MyCount',Count)


Vue.config.productionTip = false

//全局自定义指令
Vue.directive('color',function(el,binding){
      el.style.color=binding.value
})


//创建 vue 的实例对象
new Vue({
  //把 render 函数指定的组件，渲染到HTML页面中 （index.html）
  render: h => h(App),
  // 想要在Vue项目中使用路由，必须把路由实例对象挂载到下面
  router
}).$mount('#app') // Vue 实例的$mount 方法，作用和 el 属性完全一样
