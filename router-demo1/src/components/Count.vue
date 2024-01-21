<template>
    <div>
        <h5>Count 组件</h5>
        <p>count的值是：{{ count }}</p>
        <button @click="count += 1">+1</button>
    </div>
</template>

<script>
export default{
    // props 是“自定义属性”，允许使用者通过自定义属性，为当前组件指定初始值
    // 自定义属性的名字，是封装者自定义的
    // props 是只读的，不允许直接修改，否则终端会报错
    // props:["init"],
    props:{
        init:{
            //如果外界使用Count组件的时候，没有传递init属性，则默认值生效
            default:0,
            //init 的值类型必须是Number数字
            type:Number
        }
    },
    data(){
        return{
            count: this.init
        }
    }
}
</script>

<style lang="less">
    
</style>