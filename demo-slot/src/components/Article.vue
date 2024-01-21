<template>
    <div class="article-container">
    <!-- 文章的标题-->
    <div class="header-box">
        <!-- 具名插槽-->
        <slot name="title"></slot>
        <h3 v-color="'red'">测试</h3> 
    </div>

    <!-- 文章的内容-->
    <div class="content-box">
        <!-- 在封装组件时，为预留的 <slot> 提供属性对应的值，这种用法就叫做“作用域插槽” -->
        <slot name="content" msg="大帅" :user="userinfo"></slot>
    </div>

    <!-- 文章的作者-->
    <div class="footer-box">
        <slot name="footer"></slot>
    </div>

    </div>
</template>

<script>
export default{
    name:'Article',
    data(){
        return{
            userinfo : {
                name:'李星云',
                age :18
            }
        }
    }
}
</script>

<style lang="less" scoped>
.article-container{
    > div{
        min-height: 150px;
    }
    .header-box{
        background-color: blue;
    }
    .content-box{
        background-color: blueviolet;
    }
    .footer-box{
        background-color: brown;
    }
}

</style>