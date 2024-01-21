<template>
    <div class="box">
        <h4>Left 组件 --- {{ count }}</h4>
        <button @click="count += 1">+1</button>
    </div>
</template>

<script>
export default{
    //这个 name 属性主要给 keep-alive 中的缓存使用
    name:'MyLeft',
    data(){
        return{
            count:0
        }
    }
}
</script>

<style lang="less" scoped>
    .box{
        padding: 100px 30px 30px;
        background-color:brown;
    }
        
</style>