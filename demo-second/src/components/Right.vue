<template>
    <div>
        <h3>Right 组件</h3>
        <p>count 的值是 :{{ count }}</p>
        <button @click="add">+1</button>
        <h4>{{ strFromLeft }}</h4>
    </div>
</template>

<script>
//1.导入 eventbus.js 模块
import bus from './eventbus.js'


export default{
    data(){
        return{
            count:0,
            strFromLeft:''
        }
    },
    methods:{
        add(){
            this.count +=1
            //修改数据时，通过@emit 方法来触发自定义事件
            this.$emit('countchange',this.count)
            }
    },
    // 2.创建 created 方法来接受兄弟组件 Left 的值
    created(){
        // 3.为 bus 绑定自定义事件
        bus.$on('share',(val)=>{
            console.log("隔不拉！",val)
            this.strFromLeft = val 
        })
    }
}
</script>

<style lang="less">
    
</style>