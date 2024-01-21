<template>
    <div>
       <h3>Left 组件</h3>
       <p>message 的值是 {{ msg }}</p>
       <p>user 的值是 {{ user }}</p>
       <h4>{{ str }}</h4>
       <button @click="send">瘦巴巴的老爷们 一起走啊！</button>
       <h3>Left 组件 --- {{ domnum }}</h3>
       <button @click="domnum +=1">+1</button>
       <button @click="resetCount">重置</button>
    </div>
</template>

<script>
//1.导入 eventbus.js 模块
import bus from './eventbus.js'

export default{
    // 父向子
    props:['msg','user'],
    data(){
        return{
            str:'西八 skiya',
            domnum:0
        }
    },
    methods:{
        send(){
            //通过 eventbus 来发送数据
            bus.$emit('share',this.str)
        },
        resetCount(){
            this.domnum = 0
        }
    }
}
</script>

<style lang="less" scoped>
    
  
</style>