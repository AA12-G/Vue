<!-- template 下只能出现一个根元素 -->
<template> 
    <div>
        <div class="test-box">
            <h3>这是用户自定义的 Test.vue --- {{ username}}</h3>
            <button @click="changeName">修改用户名</button>
        </div>
        <div>123</div>
    </div>
</template>

<script>
    // 默认导出，这是固定写法
    export default{
        //data 数据源
        //注意：.vue 组件中的data不能像之前 ，不能指向对象
        //注意：组件中的 data 必须是一个函数
        // data:{
        //     username:'xiaoguang'
        // }
        data(){
            //这个return 出去的{}中，可以定义数据
            return{
                username:'xiaoguang'
            }
        },

        methods:{
            changeName(){
                this.username='admin'
            }
        }
    }
</script>


<style lang="less">
    .test-box{
        background-color: pink;
        h3{
            color: red;
        }
    }
</style>