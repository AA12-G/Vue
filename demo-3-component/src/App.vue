<template>
    <div>
        <div class="App">
            <h1>App组件</h1>
        </div>
        <button @click="comName = 'Left'">展示Left组件</button>
        <button @click="comName = 'Right'">展示Right组件</button>
        <hr>
        <div class="box">
        <!-- 渲染 Left 组件和 Right 组件 -->
        <!-- 3.以标签的形式，使用注册好的组件 -->

        <!-- component 是 vue 内置的，作用：组件的占位符 -->
        <!-- is 是属性值，表示要渲染的组件的名称 -->
        <!-- keep-alive 可以把内部的组件进行缓存，而不是销毁组件 -->
        <keep-alive include="MyLeft">
            <component :is="comName"></component>
        </keep-alive>
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
                // 表示要展示的组件名字
                comName : ''
            }
        }
    }
</script>

<style lang="less">
    .App{
        padding: 1px 20px 20px;
        background-color: aqua;
    }
    /* .box{
        padding: 100px 30px 30px;
        background-color:brown;
    } */
</style>

