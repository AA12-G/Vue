<template>
    <div>
        <div class="App">App.vue组件</div>
        <hr>
        <div class="box">
        <!-- 渲染 Left 组件和 Right 组件 -->
        <!-- 3.以标签的形式，使用注册好的组件 -->
        <Left></Left>
        <Right></Right>
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

