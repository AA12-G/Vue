// src/router/inedx.js 就是当前项目的路由模块
import Vue from "vue";
import VueRouter from "vue-router";

// 导入所需要的组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'

import Tab1 from '@/components/tabs/Tab1.vue'
import Tab2 from '@/components/tabs/Tab2.vue'

import Main from '@/components/Main.vue'
import Login from '@/components/Login.vue'

// 把 VueRouter 安装为 Vue 项目的插件
Vue.use(VueRouter)

// 创建路由的实例对象
 const router=new VueRouter({
  // routes 是一个数组，作用：定义 "hash地址" 和 "组件" 之间的关系
  routes:[
    // 重定向的路由规则
    { path:'/',redirect:'/home' },
    // 路由规则
    { path:'/home',component:Home },
    // 需求：根据电影id，展示对应电影的详情值
    // 可以为路由规则开启 props 传参，从而方便的拿到动态参数的值
    { path:'/movie/:mid',component:Movie,props:true },
    { 
      path:'/about',
      component:About ,
      //redirect:'/about/tab1',
      children:[
        // 子路由规则
        // 默认子路由：如果 children 数组中，某个路由规则的 path 值为空字符
        // 串,则这条路由规则，叫做“默认子路由”
        { path:'',component: Tab1},
        { path:'tab2',component: Tab2}
    ]},
    { path:'/main',component:Main },
    { path:'/login',component:Login }
  ]
 })


 // 为 router 实例对象声明全局前置导航守卫
 // 只要发生了路由跳转，必然会触发 beforeEach 指定的 function 回调函数
 router.beforeEach(function(to,from,next){
    // to 表示将要访问的路由的信息对象
    // from 表示将要离开的路由的信息对象
    // next 表示放行的意思，不放行不显示任何组件

    if(to.path === '/main'){
      // 要访问后台主页，需要判断是否有 token
      const token=localStorage.getItem('token')
      if(token){
        next()
      }else{
        // 没有登录，强制跳转到登录页
        next('/login')
      }
    }else{
      next()
    }
    
 })

 //导出路由
 export default router