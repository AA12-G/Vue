// 导入vue这个包，得到Vue 构造函数
import Vue from 'vue'
// 导入 App.vue 根组件，将来要把 App.vue 中的模板结构渲染到HTML页面中
import App from './App.vue'
// import Test from './Test.vue'

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
}).$mount('#app') // Vue 实例的$mount 方法，作用和 el 属性完全一样
