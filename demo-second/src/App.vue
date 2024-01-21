<template>
    <div>
        <div class="App">App.vue组件 --- {{ countFromson }}</div>
        <button @click="onReset">重制 Left 组件中 domnum 的值为0</button>
        <hr>

        <input type="text" v-if="inputVisible" @blur="showButton" ref="iptRef"/>
        <button v-else @click="showInput">展示输入框</button>

        <div class="box">
        <!-- 渲染 Left 组件和 Right 组件 -->
        <!-- 3.以标签的形式，使用注册好的组件 -->
        <Left ref="comLeft"></Left>
        <Right @countchange="getNewCount"></Right>
        </div>
    </div>
</template>

<script>
    //1.导入需要使用的.vue 组件
    import Left from '@/components/Left.vue'
    import Right from '@/components/Right.vue'

    export default{
        //2.注册组件
        components:{
            Left,
            Right
        },
        data(){
            return{
                message:'hello leiguang',
                user:{name:'leiguang',age:18},
                countFromson:0,
                inputVisible:false
            }
        },
        methods:{
            getNewCount(val){
                console.log("countchange 被触发了！",val)
                //获取子组件传过来的值
                this.countFromson=val
            },
            // 重置 Left 组件中 domnum 的值为 0
            onReset(){
                console.log("拿到了！")
                this.$refs.comLeft.resetCount()
                //this.$ref.comLeft.domnum=0
            },
            showInput(){
                //1.切换布尔值，把文本框展示出来
                this.inputVisible=true
                //2.让展示出来的文本框，自动获取焦点
                this.$nextTick(()=>{
                    this.$refs.iptRef.focus()
                })
            },
            showButton(){
                this.inputVisible=false
            }
        }
    }
</script>

<style lang="less">
    .App{
        padding: 1px 20px 20px;
        background-color: aqua;
    }
    .box{
        padding: 100px 30px 30px;
        background-color:brown;
    }
</style>

